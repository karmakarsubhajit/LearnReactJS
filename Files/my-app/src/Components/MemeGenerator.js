import React from "react"


class MemeGenerator extends React.Component
{
    constructor()
    {
        super()
        this.state={topText:"",
        bottomText:"",
        randomImage:"https://images.unsplash.com/photo-1618783055159-f573da486b6b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        allMemeImages:[]}

        this.handleChange = this.handleChange.bind(this)
        this.chooseRandom = this.chooseRandom.bind(this)
    }

    chooseRandom(event)
    {
        event.preventDefault()

        const randomElement = this.allMemeImages[Math.floor(Math.random() * this.state.allMemeImages.length)]
        this.setState({randomImage:randomElement.url})
    }

    handleChange(event)
    {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    componentDidMount()
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response=>{
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImages:memes})
        })
    }

    render()
    {
        return(<div>
            <form onSubmit={this.chooseRandom}>
                    <input type = "text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input type = "text" placeholder="Top Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/> 
                <button > Gen</button>
            </form>
            <div>
                <img src={this.state.randomImage} alt="NULL"/>
                <h2>{this.state.topText}</h2>
                <h2>{this.state.bottomText}</h2>

            </div>
        </div>)
    }
}


export default MemeGenerator

