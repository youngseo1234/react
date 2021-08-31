import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "bootstrap";

function onChange(newValue) {
  console.log("change", newValue);
}

const PostContent = () => {
  return (
    <>
      <Link to="/" className="text-dark">
        제목링크
      </Link>
      <Form>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
      <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </>
  );
};
export default PostContent;
