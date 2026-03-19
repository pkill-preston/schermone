<template>
  <div class="w-full md:h-[calc(100vh-100px)] flex items-start flex-col md:flex-row gap-8 px-8">
    <div
      class="md:w-[50%] w-full px-2 py-8 flex h-auto flex-wrap border rounded flex-col"
    >
      <Form
        :schema="schema"
        :state="state"
		class="flex flex-col gap-y-4"
        @submit="onSubmit"
      >
        <FormField label="Full Name" name="name">
          <Input v-model="state.name" class="w-full" />
        </FormField>

        <div class="flex w-full gap-4">
          <FormField class="w-[50%]" label="ID" name="id">
            <Input
              v-model="state.id"
              v-maska="{ mask: '###.###.###-##' }"
              class="w-full"
            />
          </FormField>

          <FormField class="w-[50%]" label="Phone" name="phone">
            <Input
              v-model="state.phone"
              v-maska="{ mask: ['(##) ####-####', '(##) #####-####'] }"
              class="w-full"
            />
          </FormField>
        </div>

        <FormField label="Email" name="email">
          <Input v-model="state.email" class="w-full" />
        </FormField>

        <div class="flex gap-4">
          <FormField class="w-[25%]" label="Postal Code" name="postalCode">
            <Input v-model="state.postalCode" v-maska="{ mask: '#####-###' }" />
          </FormField>

          <FormField class="w-[75%]" label="Address" name="adress">
            <Input v-model="state.adress" class="w-full" />
          </FormField>
        </div>

        <div class="flex w-full gap-4">
          <FormField class="w-[50%]" label="City" name="city">
            <Input v-model="state.city" class="w-full" />
          </FormField>

          <FormField class="w-[50%]" label="State" name="state">
            <Select v-model="state.state" :items="states" class="w-full" />
          </FormField>
        </div>

        <div class="w-full flex justify-center items-center mt-6">
          <Button
            size="xl"
            class="w-[85%] flex items-center justify-center"
            type="submit"
          >
            Submit
          </Button>
        </div>

        <Modal v-model:open="open" close-icon="i-lucide-x">
          <template #content>
            <div class="p-6 flex flex-col gap-6">
              <div>
                <h2 class="text-xl font-semibold">Success</h2>
                <p class="mt-2">Your form was submitted successfully.</p>
              </div>
              <Button @click="open = false">Close</Button>
            </div>
          </template>
        </Modal>
      </Form>
    </div>

    <div class="md:w-[50%] w-full px-2 py-8 flex flex-col h-[100%] border rounded">
      <div class="flex flex-col">
        <div v-for="(item, key) in cartState" :key="key">
          <CartMovie
            :id="item.id"
            :title="item.title"
            :amount="item.amount"
            :poster-path="item.posterPath"
            :rating="item.rating"
          />
          <Separator v-if="key < cartState.length - 1" class="my-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'
import * as v from 'valibot'

const open = ref(false)

const states = ref([
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
])

const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(3, 'Full name must have at least 3 characters')
  ),
  id: v.pipe(
    v.string(),
    v.transform((val) => val.replace(/\D/g, '')),
    v.regex(/^\d{11}$/, 'ID must be 11 digits (CPF)')
  ),
  phone: v.pipe(
    v.string(),
    v.transform((val) => val.replace(/\D/g, '')),
    v.regex(/^\d{10,11}$/, 'Phone must be 10 or 11 digits')
  ),
  email: v.pipe(
    v.string(),
    v.email('Invalid email address')
  ),
  postalCode: v.pipe(
    v.string(),
    v.transform((val) => val.replace(/\D/g, '')),
    v.regex(/^\d{8}$/, 'Postal code must be 8 digits (CEP)')
  ),
  adress: v.pipe(
    v.string(),
    v.minLength(5, 'Address must be at least 5 characters')
  ),
  city: v.pipe(
    v.string(),
    v.minLength(2, 'City must have at least 2 characters')
  ),
  state: v.pipe(
    v.string(),
    v.toUpperCase(),
    v.length(2, 'State must be 2 letters (e.g. SP)')
  )
})

type Schema = v.InferOutput<typeof schema>

const state = reactive<Schema>({
  name: '',
  id: '',
  phone: '',
  email: '',
  postalCode: '',
  adress: '',
  city: '',
  state: ''
})

function onSubmit() {

  open.value = true
}

const cartStore = useCartStore()
const cartState = computed(() => cartStore.cartState)
</script>