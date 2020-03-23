function Foo(property_num,element_num) {  
  for (let i = 0; i < element_num; i++) 
  { this[i] = `element${i}` }  
  for (let i = 0; i < property_num; i++) 
  { let ppt = `property${i}` this[ppt] = ppt }
}