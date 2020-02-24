import React from 'react';
import bg11Image from '../assets/img/team-pics/299043_DSCN0370.jfif';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    CardSubtitle,
    Col,
    Row,
  } from 'reactstrap';

function HistoryPage() {
    return(
        <Row>
            <Col md={12} sm={12} xs={12} className="mb-3">
                <Card>
                    <CardImg top src={bg11Image} />
                        <CardBody>
                            <CardTitle><h1>Atlanta Renegades Rugby Football Club</h1></CardTitle>
                            <CardText>
                                
                                    The Atlanta Renegades Rugby Football Club was founded in 1971 by a small group of athletes dedicated 
                                    to the game of rugby. The aspirations of the club were not great; in fact at that time there were no 
                                    club championships, select sides, territorial sides or national side. The Club Philosophy was simply 
                                    to WORK HARD, PLAY WELL and HAVE FUN.
                                
                            </CardText>

                            <CardText>    
                                    Since then rugby has grown to have multiple layers of competition in the U.S. True to the traditions 
                                    laid down in the beginning - Renegade sides have earned a respected place in the history of Southern 
                                    and American rugby.
                            </CardText>

                            <CardText> 
                                
                                    In 1973, ARRFC hosted the first Peachtree Invitational Rugby Tournament - one of the first ever rugby 
                                    tournaments to be held in the South. In 1977, the club was the first Southern team to tour England and Wales. 
                                    One of the host teams has become a "brother club" to the Renegades - the Newport Saracens. 
                                    To this day, members of those teams gather to travel to play in Saranac as the "Saragades" in over-45 
                                    divisional play. Also in 1977, the club formed its original charter.
                            </CardText>
                            
                            <CardText>   
                                    On the field, the club has a long list of successes. The Renegades have been involved in territorial 
                                    playoffs since 1980, through the existence of the old Eastern Rugby Union and now in USA Rugby South. 
                                    Tournaments won include the Peachtree Invitational, St. Louis Ruggerfest, Gator Invitational, Savannah St. 
                                    Patrick's Day Tournament, Charleston Michelob Rugby Classic, the Dogwood Invitational and others.
                            </CardText>
                            
                            <CardText> 
                                    The ARRFC has toured Wales, Scotland, Ireland, England, The Bahamas, The Cayman Islands, and the U.S. 
                                    West Coast. Touring sides to visit the Renegades include teams from Wales, Ireland, Zambia, South Africa, 
                                    Argentina, England, Bermuda, The Bahamas and The Cayman Islands.
                            </CardText>

                            <CardText> 
                                    The club membership rolls have included players from not only all corners of the U.S., but also Italy, 
                                    Fiji, England, Wales, Ireland, Australia, New Zealand, South Africa, Western Samoa, Uruguay, Scotland, 
                                    France, Kenya, and Tonga. That cultural diversity is an aspect of this club that is considered particularly 
                                    unique.
                            </CardText>
                               

                            <CardSubtitle className={"mt-5"}><h2>Practice/Field Location</h2></CardSubtitle> 
                                
                            <CardText> 
                                    The Atlanta Renegades RFC currently practice and host home games at the Atlanta Silverbacks Park. 
                                    New players as well as experienced ones are always welcome to come out and join. Practice starts 
                                    at 7:30 PM on Tuesdays and Thursdays.
                            </CardText>
                        </CardBody>
                </Card>
            </Col>
        
        </Row>    
        
    )
    
}

export default HistoryPage;