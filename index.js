var recipes = {}

function updateObjectWithKeyAndValue( object, key, value ) {
  return Object.assign({ [key]: value }, object )
}

function destructivelyUpdateObjectWithKeyAndValue( object, key, value ) {
  return Object.assign( object, { [key]: value })
}

function deleteFromObjectByKey( object, key ) {
  var returnObject = Object.assign( {}, object )
  console.log( `returnObject: ${ JSON.stringify( returnObject )}` )
  console.log( `key: ${ key }`)
  delete returnObject[key]
  console.log( `returnObjectAfter: ${ JSON.stringify( returnObject )}` )
  return returnObject
}
