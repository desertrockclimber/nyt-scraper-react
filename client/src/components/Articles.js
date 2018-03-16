import React from 'react';
// The articles div should show the top 5 articles associated with the search. 
const Articles = (props) => {


return (
		<div>
			<h4>{props.articleData.name}</h4>
			<a href={props.articleData.url}></a>
		</div>	
		)
}



export default Articles;
