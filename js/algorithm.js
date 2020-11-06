function bsp_sub(been,being){
    let bsp_been = new ThreeBSP(been);
    let bsp_being = new ThreeBSP(being);
    let bsp = bsp_been.subtract(bsp_being);
    return bsp.toMesh().geometry;
}
function load_jpg_re(url){
    let loader = new THREE.TextureLoader();
    let texture = loader.load(url,function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4,4);
        texture.transparent = true;
    })
    return texture;
}