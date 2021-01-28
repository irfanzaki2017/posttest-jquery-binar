$(document).ready(function(){
    $("h1").click(function(){
        $("h1").text(nama);
    })
    $("#ttl").click(function(){
        $("#ttl").text(ttl);
    })
    $("#motto").click(function(){
        $("#motto").text(motto);
    })
    $("b").click(function(){
        $(".sembunyi").slideToggle("slow");
    });                       
 });


 let nama = prompt("Kasih tahu nama kamu dong");
 let ttl = prompt("kamu lahir dimana dan kapan?");
 let motto = prompt("boleh bagi motto hidup kamu?");
 alert(`masih dalam perbaikan, jadi nanti bagian "about" nya kamu hide aja bisa kok! `);