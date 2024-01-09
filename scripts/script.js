const squareBody = document.querySelector('.square-body')
const blocksNumber = document.querySelectorAll('.block-number')
const resetBtn = document.querySelector('.btn-reset')

let blocks = squareBody.querySelectorAll('.block')

console.log(resetBtn)

blocks.forEach((block, idx) => {

	block.addEventListener('click', (e) => {
		const num = +block.querySelector('.block-number').textContent

		if(!!e.target.closest('.arrow.right') && idx < blocks.length -1) {
			blocksNumber[+idx].textContent = +idx +2
			blocksNumber[+idx +1].textContent = num

		}else if(!!e.target.closest('.arrow.left') && idx >0) {
			blocksNumber[+idx].textContent = +idx +1
			blocksNumber[+idx -1].textContent = num

		} else 	if(!!e.target.closest('.arrow.top') && idx > 4) {
			let num1 = blocksNumber[idx].textContent
			let num2 = blocksNumber[idx - 5].textContent
			blocksNumber[idx].textContent = num2
			blocksNumber[idx - 5].textContent = num1
			console.log(idx)


		}else if(!!e.target.closest('.arrow.bottom') && idx < 20) {
			let num1 = blocksNumber[idx].textContent
			let num2 = blocksNumber[idx + 5].textContent
			blocksNumber[idx].textContent = num2
			blocksNumber[idx + 5].textContent = num1
			


		}
	})
})


resetBtn.addEventListener('click', () => {
	blocksNumber.forEach((elem, index) => {
		elem.textContent = +index + 1
	})
})