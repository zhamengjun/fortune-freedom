let obj = {
  name: 'mark'
};

for (let key in obj) {
  console.log(key, obj[key]);
}
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});

Object.getOwnPropertyNames(obj).forEach(key => {
  console.log(key, obj[key]);
});

Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key]);
});
