import MainScene from "../scenes/MainScene.js"
const config = {
    width:500,
    height:510,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    backgroundColor: '#999999',
    type: Phaser.AUTO,
    parent: 'index',
    scene:[MainScene],
    scale: {
      zoom:2,
    },
    physics: {
      default: 'matter',
      matter: {
        debug:true,
        gravity:{y:0},
      }
    },
    plugins: {
      scene:[
        {
          plugin: PhaserMatterCollisionPlugin,
          key: 'matterCollision',
          mapping: 'matterCollision'
        }
      ]
    }
  }
  new Phaser.Game(config);