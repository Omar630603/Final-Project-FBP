import React from 'react'

const DetailMovie=(props) => {
	console.log(props.detail.name)
	return (
		<div>
			<p>{props.detail.name}</p>
		
		</div>
	)
}

export default DetailMovie