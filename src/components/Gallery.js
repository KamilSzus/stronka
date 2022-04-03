import React from 'react'
import "./Gallery.css"

export default class GalleryGrid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cols: ''
        }
    }

    render() {
        let gridColumnStyle = 'repeat('+this.props.cols+', 1fr) '

        let gridContainerWidth = this.props.cols * 250
        return (
            <div
                style={{
                    display: 'grid'
                }}
            >
                <div
                    style={{
                        gridTemplateColumns: gridColumnStyle,
                        gridTemplateRows: 'repeat(4, 1fr)',
                        width:  'auto',
                        float: 'left',
                    }}
                >
                    {/* Provide space to child componets in here */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export class GalleryImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            src: null,
            title: '',
            fullScreen: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(() => ({
            fullScreen: !this.state.fullScreen
        }))
        console.log('You clicked ' + this.state.title)
    }

    render() {
        return (
            <div>
                <div className='image-grid-card' style={{backgroundImage: 'url(' + this.props.src + ')'}}
                     onClick={this.handleClick}>
                    <div className='image-grid-card-title'>
                    </div>
                    <div className='overflow-back'>
                    </div>
                </div>
                <div className="card-body">
                    <a href="" className="h3 text-decoration-none">Nazwa</a>
                    <p className="text-center mb-0">$.00</p>
                </div>
            </div>
        )
    }
}
