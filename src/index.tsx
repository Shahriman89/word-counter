import ForgeUI, {
  render,
  Button,
  Form,
  Fragment,
  TextField,
  TextArea,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  SectionMessage,
  Macro,
  useState,
  Text,
  Table, Head, Row, Cell,
} from "@forge/ui";

const initialFormData = Object.freeze({
  input: "",
  sortResult: "Word",
  sortOrder: "Ascending"
});

const App = () => {
  // useState is a UI kit hook we use to manage the form data in local state
  const [formState, setFormState] = useState(initialFormData);
  const [resultState, setResultState] = useState([]);
  // Handles form submission, which is a good place to call APIs, or to set component state...
  const onSubmit = async (formData) => {
     //Split input
     var words = formData.input.split(" ");
     //Count Word
     var wordCounts = [];
     words.forEach((x) => {
         wordCounts[x] = (wordCounts[x] || 0) + 1;
     });
     //Format into Word(String) and Count(Int)
     let wordsList = [];
     for (let i = 0; i < Object.keys(wordCounts).length; i++) {
         wordsList.push({
           word:Object.keys(wordCounts)[i],
           count:Object.values(wordCounts)[i]
         });
     }
     //Check Sort Result and Sorder Order and return Sorted List
      let wordsListSorted;
      if(formData.sortOrder == "Ascending"){
        wordsListSorted = wordsList.sort((a, b) => a.word.localeCompare(b.word));
        if(formData.sortResult == "Count"){
          wordsListSorted = wordsListSorted.sort((a, b) => a.count - b.count);
        }
      }
      if(formData.sortOrder == "Descending"){
        wordsListSorted = wordsList.sort((a, b) => a.word.localeCompare(b.word)).reverse();
        if(formData.sortResult == "Count"){
          wordsListSorted = wordsListSorted.sort((a, b) => a.count - b.count).reverse();
        }
      }
      //Set State
      setResultState(wordsListSorted);
      setFormState(formData);
  };

  return (
    <Fragment>
      <Text>Word counter macro</Text>
      <Form onSubmit={onSubmit} submitButtonText="Let's start counting" >
        {
        <TextArea name="input" label="Your input field" defaultValue={formState.input} />
        }
        {
        <RadioGroup name="sortResult" label="Sort result by">
          <Radio defaultChecked={formState.sortResult === "Word"} label="Word" value="Word" />
          <Radio defaultChecked={formState.sortResult === "Count"} label="Count" value="Count" />
        </RadioGroup>
        }
        {
        <RadioGroup name="sortOrder" label="Sort order by">
          <Radio defaultChecked={formState.sortOrder === "Ascending"} label="Ascending" value="Ascending" />
          <Radio defaultChecked={formState.sortOrder === "Descending"}label="Descending" value="Descending" />
        </RadioGroup>
        }
      </Form>
      { formState && (formState.input !== "") &&
        <SectionMessage title="You entered:" appearance="info">
          <Text>{formState.input}</Text>
        </SectionMessage>
      }
      { formState && resultState && (formState.input !== "") &&
        <Table>
          <Head>
            <Cell>
              <Text>Word</Text>
            </Cell>
            <Cell>
              <Text>Count</Text>
            </Cell>
         </Head>
        {resultState.map(result => (
          <Row>
            <Cell>
              <Text>{result.word}</Text>
            </Cell>
            <Cell>
              <Text>{result.count}</Text>
            </Cell>
          </Row>
        ))}
        </Table>
      }
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
