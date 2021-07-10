import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

    function Home(props) {
      return(
          <div className="container">
              <div className="row  align-items-start">
                  <div className="col-12 col-md mt-5">
                  <Card style={{ backgroundColor: 'pink' }} >
                  <CardImg  src="/images/Fictionn.png" height="200px"/>
                  <CardBody >
                    <CardTitle style={{fontWeight: 'bold'}}>Fiction</CardTitle>
                  <CardText>“Fiction” refers to literature created from the imagination. Mysteries, science fiction, romance, fantasy, chick lit, crime thrillers are all fiction genres. Examples of classic fiction include To Kill a Mockingbird by Harper Lee, A Tale of Two Cities by Charles Dickens, 1984 by George Orwell and Pride and Prejudice by Jane Austen. Our Fiction section has a large selection of popular and bestseller book</CardText>
                  </CardBody>
                </Card>
                  </div>
                  <div className="col-12 col-md mt-5">
                  <Card  style={{ backgroundColor: 'pink' }}>
                  <CardImg  src="/images/nonfictionn.png" height="200px"/>
                  <CardBody >
                    <CardTitle style={{fontWeight: 'bold'}}>Non-Fiction</CardTitle>
                  <CardText>“Nonfiction” refers to literature based in fact. It is the broadest category of literature. The Nonfiction Department has books in many categories including biography, business, cooking, health and fitness, pets, crafts, home decorating, languages, travel, religion, art and music, history, self-help, true crime, science and humor. We also have a section of popular and award-winning Books</CardText>
                  </CardBody>
                </Card>
                  </div>
                  <div className="col-12 col-md m-1">
                  <Card >
                  <CardBody >
                  <CardText style={{fontWeight: 'bold' ,color: "Black", fontsize:90}}>Constantly buying new BOOKS is no addiction, it's a way of life </CardText>
                  </CardBody>
                </Card>
                <Card >
                  <CardBody >
                  <CardText style={{fontWeight: 'bold' ,color: "Black", fontsize:90}}>There are many little ways to enlarge your world.  Love of books is the best of all. </CardText>
                  </CardBody>
                </Card>
                <Card >
                  <CardBody >
                  <CardText style={{fontWeight: 'bold' ,color: "Black", fontsize:90}}>Reading… a vacation for the mind… </CardText>
                  </CardBody>
                </Card>
                <Card >
                  <CardBody >
                  <CardText style={{fontWeight: 'bold' ,color: "Black", fontsize:90}}>Each book was a world unto itself, and in it I took refuge.</CardText>
                  </CardBody>
                </Card>
                <Card >
                  <CardBody >
                  <CardText style={{fontWeight: 'bold' ,color: "Black", fontsize:90}}>Reading is to the mind what exercise is to the body.</CardText>
                  </CardBody>
                </Card>
                <Card >
                  <CardBody >
                  <CardText style={{fontWeight: 'bold' ,color: "Black", fontsize:90}}>Some books leave us free and some books make us free. </CardText>
                  </CardBody>
                </Card>
                  </div>
                 
              </div>
          </div>
      );
  }
  
  export default Home;