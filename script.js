function submitResults(){
    let box1 = document.querySelector(`#camp1`).value.toUpperCase()
    let box2 = document.querySelector(`#camp2`).value.toUpperCase()
    let box3 = document.querySelector(`#camp3`).value.toUpperCase()
    let box4 = document.querySelector(`#camp4`).value.toUpperCase()
    let refreshPage = document.createElement(`meta`)
    let finalMsg = document.querySelector(`#finalMensage`)
    img.setAttribute('src', `img`)
    if(box1.length > 1 || box2.length > 1 || box3.length > 1 || box4.length > 1){
        window.alert(`ERROR! ONLY ONE CARACTER FOR EACH BOX, TRY AGAIN`)
    }else if(box1 + box2 + box3 + box4 == `RUST`){ 
        window.alert(`!! - CONGRATULATIONS - YOU WIN !!`)
        img.setAttribute(`src`, `https://res.cloudinary.com/teepublic/image/private/s--EMRChRsQ--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_945,x_-60,y_-76/co_rgb:000000,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_945/fl_layer_apply,g_north_west,x_-60,y_-76/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1577567343/production/designs/7377293_0.jpg`)
        window.location.reload()
    }else {
        window.alert(`!! YOU MISSED, TRY AGAIN !!`)
        img.setAttribute(`src`, `https://img.freepik.com/fotos-gratis/facepalm-retrato-de-uma-jovem-chateada-esquecida-em-terno-de-negocios-tocando-sua-testa-com-expressao-triste-culpando-o-fracasso-ma-memoria-tiro-de-estudio-interior-isolado-no-fundo-rosa_416530-22492.jpg`)
        window.location.reload()
    }
    
}