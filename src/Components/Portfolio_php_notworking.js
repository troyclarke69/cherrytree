import React, { Component } from 'react';
import $ from 'jquery';


class Portfolio extends Component {
		
	 constructor(props){
		super(props);
		this.state = {
		  foo: 'bar',
		  projectData: {}
		};
	}
	
	getProjectData(){
    $.ajax({
      url:'http://triosdevelopers.com/~T.Clarke/phpTest/projects.php?show=1',
      dataType:'html',
      cache: false,
      success: function(dataProject){
        this.setState({projectData: dataProject});
		console.log(dataProject);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getProjectData();
		}
  
  render() {
  var projectData = this.props.projectData.map(
		function(dataProject)
	)};
		
	  {/* if(this.props.dataProject){
      var projects = this.props.dataProject.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      }
	  }*/}

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            {/*<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>*/}
			
			<div id="projects"></div>
			let container = document.getElementById('projects');
			container.innerHTML = {projectData};
			
			{/*<div>Projects:
				<div id="projects"></div>
				<button id="getProjects">Go</button>				
			</div>*/}

         </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
