import { Component, DoCheck, OnInit,  } from '@angular/core';
import * as monaco from 'monaco-editor';
import { RuncodeService } from 'src/app/service/runcode.service';
import { io } from 'socket.io-client';

// import { editor, languages } from 'monaco-editor';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent   implements OnInit {
 

  editor:monaco.editor.IStandaloneCodeEditor={} as monaco.editor.IStandaloneCodeEditor;
  code: string= 'console.log("Hello, World! ")';
  lang: any='javascript';
 
  outPut: string='';
  socket:any=io('https://advanced-code-editor-backend.vercel.app');
  // socket:any=io('http://localhost:5000');
  // editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = { theme: 'vs-dark', language: 'javascript', fontSize: 12, selectOnLineNumbers: true };
  
   languages = [{
    name: 'JavaScript',
    language: 'javascript',
    versionIndex: 4,
    code:'console.log("Hello, World! JavaScript")'
  },{
    name: 'Java',
    language: 'java',
    versionIndex: 4,
    code:"public class Main\n{\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World Java\");\n\t}\n}"

  },
  {
    name: 'C++',
    language: 'cpp',
    versionIndex: 5,
    code:'#include <iostream>\nint main() {\n\tstd::cout << "Hello, World! c++";\n\treturn 0;\n}'
  },
  {
    name: 'Python3',
    language: 'python',
    versionIndex: 4,
    code:'print("Hello, World! Python3")'
  }
  
  ]
 


  constructor( private runcodeService: RuncodeService) {  this.connectSocket() }


  ngOnInit() {
    const getLang=localStorage.getItem('language');
    const getCode=JSON.parse(localStorage.getItem('code') || '{}');

       console.log(getLang, getCode)
       if(getLang && getCode != null){
       this.lang=getLang
       this.code = getCode;
      //  this.scriptCode = getCode;
       }

  this.socket.on('updateContent', (content: any, lang: any) => {
    this.code = content;
    this.lang = lang;
    console.log(this.code)
  })
  }
  
  selectedLanguage(event: any) {
  
    this.lang = event.target.value;
    localStorage.setItem('language', this.lang);
    this.languages.forEach(element => {
      if (element.language == this.lang) {
        this.lang=element.language
        this.code = element.code;
        console.log(this.code, this.lang)
      }
    })

    
  }
 




  onMonacoInit(editor: any) {
//    const getLang=localStorage.getItem('language');
//    const getCode=JSON.parse(localStorage.getItem('code') || '{}');

//    console.log(getLang, getCode)
// if(getLang && getCode != null){
// this.lang=getLang
// editor.setValue(getCode);
// }

    // console.log('monaco', editor.setModelLanguage( editor.getModel(), 'javascript'));
  // editor.setValue("shivam");
  // const newModel=editor.createModel(this.code,'javascript');
  // console.log(editor.getModel().getLanguageId());


}

  onMonacoChange(event: any) {
    // console.log('code changed', event);
    this.socket.emit('edit', event, this.lang);
    this.code = event;
    localStorage.setItem('code', JSON.stringify(this.code));
    localStorage.setItem('language', this.lang);
  
    
    // console.log(JSON.stringify(this.scriptCode));  

  }

  runCode(){
  // console.log(this.scriptCode)
  const body={
    script: this.code,
    language: this.lang
  }
  this.runcodeService.runCode(body)
  .subscribe((res: any) => {
    this.outPut = res.message.output
  })
  
}

saveCode( ){
  
  localStorage.setItem('language', this.lang);
  localStorage.setItem('code', JSON.stringify(this.code));
}



connectSocket(){
  this.socket.on('connect', () => {
    console.log('connected');
  })

}
 

}
