const app = new Vue({
	el: '#app',
	data: {
		books: [{
				id: 1,
				name: '熊鞠大法好！',
				data: '2016-7',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: 'KHSZD！',
				data: '2016-9',
				price: 88.00,
				count: 1
			}, {
				id: 3,
				name: 'DMKJH！',
				data: '2016-12',
				price: 100.00,
				count: 1
			}, {
				id: 4,
				name: 'TMSK入籍，四方会谈',
				data: '2020-3',
				price: 666.00,
				count: 1
			}
		]
	},
	methods: {
		decrement(index) {
			if (this.books[index].count == 1) {

			} else {
				this.books[index].count--;
			}
		},
		increment(index) {
			this.books[index].count++;
		},
		remove(index) {
			this.books.splice(index, 1);
		}
	},
	computed: {
		totalPrice() {
			let total = 0;
			for (let i = 0; i < this.books.length; i++) {
				total += this.books[i].price * this.books[i].count;
			}
			return total;
		}
	},
	filters: {
		showPrice(price) {
			return '￥' + price.toFixed(2);
		}
	}
})
