//JSON APIs and Ajax: Handle Click Events with JavaScript using the onclick property

<script>
  document.addEventListener('DOMContentLoaded', function(){
document.getElementById('getMessage').onclick = function(){};
  });
</script>



//json APIs and Ajax: Change Text with click Events

<script>
  document.addEventListener('DOMContentLoaded', function(){
 document.getElementById('getMessage').onclick = function(){
      // Add your code below this line

document.getElementsByClassName('message')[0].textContent = "Here is the message";
      // Add your code above this line
    }
  });
</script>