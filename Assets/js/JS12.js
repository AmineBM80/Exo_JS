function testerRadio() 
{
  let radio = document.getElementsByName("btnRadChoix");

  for (i=0; i<radio.length;i++) 
  {
    if (radio[i].checked) 
    {
      document.getElementById("txtBox1").value = radio[i].value;
    }
  }
}