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
                let  mydate = new Date(comment.date)
                var month = mydate.toLocaleString('en-us', { month: 'short' }); 
                var year = mydate.getFullYear(); 
                var day = mydate.getDay();

                console.log(month,year)
                return (
                    <li>
                        <li>{comment.comment}</li>
                        <li className="m-3">-- { comment.author} , {month} {day} , {year}   </li>
                    </li>
                    
                );
            })
        }
        

        return comments
    }


    render(){
        if (this.props.dish != null){
            
            return(
                <div >
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