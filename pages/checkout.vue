<template>
	<div class="w-full h-[calc(100vh-100px)] items-center flex gap-8 px-8">
		<div class="w-[50%] px-2 py-8 flex h-auto flex-wrap border flex-col">
			<Form :schema="schema" :state="state" class="flex flex-col gap-y-4">
				<FormField label="Full Name" name="name">
					<Input class="w-full" />
				</FormField>
				<div class="flex w-full gap-4">
					<FormField class="w-[50%]" label="ID" name="id">
						<Input v-model="state.id" class="w-full" />
					</FormField>
					<FormField class="w-[50%]" label="Phone" name="phone">
						<Input v-model="state.phone" class="w-full" />
					</FormField>
				</div>
				<FormField label="Email" name="email">
					<Input v-model="state.email" class="w-full" />
				</FormField>
				<div class="flex gap-4">
					<FormField class="w-[25%]" label="Postal Code" name="postalCode">
						<Input v-model="state.postalCode" />
					</FormField>
					<FormField class="w-[75%]" label="Adress" name="adress">
						<Input class="w-full" v-model="state.adress" />
					</FormField>
				</div>
				<div class="flex w-full gap-4">
					<FormField class="w-[50%]" label="City" name="city">
						<Input v-model="state.city" class="w-full" />
					</FormField>
					<FormField class="w-[50%]" label="State" name="state">
						<Input v-model="state.state" class="w-full" />
					</FormField>
				</div>
				<div class="w-full h-[100%] flex justify-center">
					<Button size="xl" class="w-[85%] flex justify-center" type="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
		<div class="w-[50%] px-2 py-8 flex flex-col h-[85%] border">
			<div class="flex flex-col">
                <div v-for="(item, key)  in cartState" :key="key">
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

import * as v from 'valibot'
import type { FormSubmitEvent } from '#i/types'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
})

type Schema = v.InferOutput<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}

const state = reactive({
    name: "",
  id: "",
  phone: "",
  email: "",
  postalCode: "",
  adress: "",
  city: "",
  state: ""
})
const cartStore = useCartStore()
const cartState = computed(() => cartStore.cartState)
</script>
