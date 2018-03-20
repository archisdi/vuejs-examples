export const fruitMixin = {
    data() {
        return {
            fruits: ["apple", "banana", "mango", "melon", "durian"],
            filterText: ""
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(item => item.match(this.filterText));
        }
    }
}