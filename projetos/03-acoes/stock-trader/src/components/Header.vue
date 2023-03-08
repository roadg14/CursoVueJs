c

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions(['randomizeStocks', 'loadData']),
        endDay() {
            this.randomizeStocks()
        },
        saveData() {
            const { funds, stockPortfolio, stocks } = this.$store.getters
            this.$http.put('data.json', { funds, stockPortfolio, stocks })
        },
        loadDataLocal() {
            this.loadData()
        }
    }
}
</script>

<style>

</style>
