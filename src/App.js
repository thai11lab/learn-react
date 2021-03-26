import React from "react";

function App() {
  const name="Đàm Anh Thái";
  const age =20;
  const family ={
    human1:{
      name : "Nguyễn Thị Ngoai",
      age  : 40
    },
    human2:{
      name : "Đàm Anh Sơn",
      age : 12
    }
  }
  const list =[
    {
      name:"Thái",
    },
    {
      name:"Nhựt"
    }
  ]
  const sex = true;
  return (
    <section>
      <h1>Hello {name}</h1>
      <p>Giới tính : {sex ?<p style={{backgroundColor:"red"}}>Nam</p>:<p style={{backgroundColor:"green"}}>Nữ</p>}</p>
      {sex &&(
          <div>
            <p>Đàm Anh Thái 1</p>
            <p>Đàm Anh Thái 1</p>
            <p>Đàm Anh Thái 1</p>
          </div>
        )
      }
      <p>Sử dụng reactframment</p>
      {sex &&(
          <React.Fragment>
            <p>Thẻ 1</p>
            <p>Thẻ 2</p>
            <p>Thẻ 3</p>
          </React.Fragment>
        )
      }

      <p>Render object</p>
      {list.map((value)=>(
        <li>{value.name}</li>
      ))}
    </section>
  );
}

export default App;
