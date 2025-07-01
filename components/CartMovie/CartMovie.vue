<template>
	<div class="p-2 flex justify-between w-full border rounded">
		<div class="flex justify-between gap-2">
			<div class="max-h-22 max-w-16">
				<img class="max-h-22" :src="`${posterPath}`" alt="" >
			</div>
			<div class="w-auto">
				<div>
					<p>{{title}}</p>
					<p>Price : {{ ((price) * cardAmount).toFixed(2) }}</p>
				</div>
				<InputNumber
					v-model="cardAmount"
					class="max-w-[55%] cursor-pointer"
					:increment="{
                    color: 'neutral',
                    variant: 'ghost',
                    size: 'xs',
                }"
					:decrement="{
                color: 'neutral',
                 variant: 'ghost',
                  size: 'xs' }"
				/>
			</div>
		</div>
		<div>
			<Icon :onclick="removeFromCart" name="i-lucide-trash-2" />
		</div>
	</div>
</template>

<script setup lang="ts">

const props = defineProps({
    id: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: "Title"
    },
    posterPath: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        default: 0.0
    },
    amount: {
        type: Number,
        default: 1
    }
})
const price = ref(props.rating*1.8)
const cardAmount = ref(props.amount ?? 1)
const cartStore = useCartStore()

watch(cardAmount, (newValue,oldValue) => {
    const difference = newValue - oldValue
    const index = cartStore.cartState.findIndex((item) => item.id === props.id)

    if (difference > 0 || index !== 1){
        cartStore.cartState[index].amount += 1
    }else if(difference < 0) {
        cartStore.cartState[index].amount -= 1
    }
})

const removeFromCart = () =>{
    cartStore.removeFromCart(props.id)
}
</script>