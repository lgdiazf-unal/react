import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return(
        <Card key={dish.id}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({comments}) {
    let divcomments = <div></div>
        if (divcomments != null){
            divcomments = comments.map(comment=>{
                return (
                    <li>
                        <li>{comment.comment}</li>
                        <li className="m-3">-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}   </li>
                    </li>
                    
                );
            })
        }
        return divcomments
}

const  DishDetail = (props) => {
    if (props.dish != null){
            
        return(
            <div  className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props)}
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul class = "list-unstyled">
                            {RenderComments(props.dish)}
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


export default DishDetail;