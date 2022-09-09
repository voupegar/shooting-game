function renderEnemy() {
    // 要素の大きさ
    const monsterWidth = 50
    const monsterHeight = 50
  
    // 要素の追加
    const monster = document.createElement("img")
    monster.src = "alien-monster.png"
    monster.style.position = 'absolute'
    monster.width = "50"
    starBackground.appendChild(monster)
  
  
    // 初期座標
    const monsterCoordinate = { x: 100, y: 8 } // developer console で確認するとわかりますが、<body> には実は 8px のマージンがあります
    monster.style.left = monsterCoordinate.x
    monster.style.top = monsterCoordinate.y
  
      //座標の変化
      setInterval(()=>
    {
      // 横に動かす値をランダムで決める
      // Math.random は 0 <= x < 1 の間の数字を返す
      var shiftX = Math.floor(Math.random() * 10) + 1 // 1 から 5の間の整数を返す
      shiftX *= Math.round(Math.random()) ? 1 : -1 // ランダムで + か - か決める
  
      monsterCoordinate.x += shiftX
      monsterCoordinate.y += 5 // 敵を徐々に下に動かす
      monster.style.left = monsterCoordinate.x
      monster.style.top = monsterCoordinate.y
  
      //画面外に出た要素を消す
      if (monsterCoordinate.y > 600) //画面外か判定(数字同士を比較）
      { 
        monster.remove()
      } 
    } , 500)        
  }
  
  // 敵を出し続ける
  renderEnemy() // 最初の1回
  setInterval(() => {
    renderEnemy()
  }, 5000)