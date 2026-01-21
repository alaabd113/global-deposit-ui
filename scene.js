/* -------- THREE.JS BACKGROUND -------- */
const canvas = document.getElementById("scene");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

const geo = new THREE.PlaneGeometry(10, 10, 40, 40);
const mat = new THREE.MeshBasicMaterial({
  color: 0x00f3ff,
  wireframe: true,
  transparent: true,
  opacity: 0.03
});

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

function animate() {
  mesh.rotation.z += 0.0002;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

/* -------- OIL DROPS -------- */
const oil = document.getElementById("oil");
const ctx = oil.getContext("2d");

oil.width = 140;
oil.height = 140;

let drops = [];

function newDrop() {
  drops.push({
    x: 70 + (Math.random() * 20 - 10),
    y: 70,
    r: Math.random() * 3 + 1,
    v: Math.random() * 0.5 + 0.3
  });
}

function drawDrops() {
  ctx.clearRect(0,0,140,140);

  drops.forEach(d => {
    d.y += d.v;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 200, 80, 0.6)";
    ctx.fill();
  });

  drops = drops.filter(d => d.y < 140);
}

setInterval(newDrop, 600);
setInterval(drawDrops, 30);
