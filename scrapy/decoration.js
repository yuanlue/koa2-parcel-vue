class Boys {
	
	constructor(){
		this.name="123"
	}
	@speak
	run(){
		console.log('i can run')
	}
}
function speak(target,key,descriptor){
	console.log(target[key])

}
const boy = new Boys()
boy.run()