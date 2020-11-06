function translucent_box(a,h,b,x = 0,y = 0,z = 0){
    let box = new THREE.Mesh(
        new THREE.BoxGeometry(55, 5, 50),
        new THREE.MeshPhongMaterial({color : 0xffffff,transparent : true,opacity: 0.5,emissive : 0xffffff})
    );
    box.position.set(x,y,z);
    return box;
}
function golden_Cylinder(radiusTop = 20,radiusBottom = 20,height = 100,radiusSegments = 8,heightSegments = 1,openEnded = false) {
    let model = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop,radiusBottom,height,radiusSegments,radiusSegments,openEnded),new THREE.MeshPhongMaterial({color : 0xa38144,specular : 0xa38144}));
    return model;
}