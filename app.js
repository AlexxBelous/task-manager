const express = require( 'express' );
const app = express();
const tasks = require( './router/tasks' );

//middleware
app.use( express.json() )


app.get( '/hello', ( req, res ) => {
	res.send( 'The Task Manager' );
} )

app.use( '/api/v1/tasks', tasks );


const port = 3000;
app.listen( port, console.log( `Server is listening on port ${port}...` ) )