// window.onload = function() {
document.addEventListener("turbolinks:load", function(){
  document.querySelectorAll("tr").forEach(function(tr){
    tr.addEventListener('mouseover', function(e){
      e.currentTarget.style.backgroundColor = '#eff';
    });

    tr.addEventListener('mouseout', function(e){
      e.currentTarget.style.backgroundColor = '';
    });
  });
});

// document.addEventListener("turbolinks:load", function(){
//   document.querySelectorAll(".delete").forEach(function(a){
//     a.addEventListener("ajax:success", function(){
//       var td = a.parentNode;
//       var tr = td.parentNode;
//       tr.style.display = "none";
//     });
//   });
// });