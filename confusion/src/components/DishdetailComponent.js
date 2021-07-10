import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderDish(dish){
        return(
            <Card key={dish.id}>
                <CardImg top src={dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }


    renderComments(){
        let comments = <div></div>
        
        if (this.props.dish.comments != null){
            comments = this.props.dish.comments.map(comment=>{
                return (
                    <li>
                        <li>{comment.comment}</li>
                        <li className="m-3">-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}   </li>
                    </li>
                    
                );
            })
        }
        

        return comments
    }


    render(){
        if (this.props.dish != null){
            
            return(
                <div  className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>

                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul class = "list-unstyled">
                                {this.renderComments()}
                            </ul>
                        </div>

                    </div>
                </div>
            );
        }
            
        else{
            return(
                <div></div>
            );

        }
            

    }

}

export default Dishdetail;