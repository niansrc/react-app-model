import React ,{Component} from 'react';
// import FileViewer from 'react-file-viewer';
import axios from 'axios';
import './index.scss';
class PageOne extends Component {
    componentDidMount() {
      axios.post("/server/systemConfig/getIndexnfo").then(res=>{
        // debugger;
      })
    }
    render(){
      return (
        <div className="pageOne">
            <div className="item">pageOne</div>
            <img src={require("@/static/images/icon.jpg")} alt=""/>
            {/* <FileViewer 
              fileType='xlsx'//文件类型
              filePath={require("../../static/images/111.xlsx")} //文件地址
              // onError={this.onError.bind(this)} //函数[可选]：当文件查看器在获取或呈现请求的资源时发生错误时将调用的函数。在这里可以传递日志记录实用程序的回调。
              // errorComponent={console.log("出现错误")} //[可选]：发生错误时呈现的组件，而不是react-file-viewer随附的默认错误组件。
              // unsupportedComponent={console.log("不支持")} //[可选]：在不支持文件格式的情况下呈现的组件。
            /> */}
        </div>
      )
    }
  }
  export default PageOne;