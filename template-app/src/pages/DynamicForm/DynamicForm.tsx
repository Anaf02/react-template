import { Button, Form, InputGroup } from "react-bootstrap"


interface InputDescription {
    fieldType: string,
    name: string,
    label: string,
    value?: string | number,
}

const jsonform: InputDescription[] = [
    {
        "fieldType": "text",
        "name": "username",
        "label": "Username",
    },
    {
        "fieldType": "number",
        "name": "age",
        "label": "Age",
        "value": 23
    },
    {
        "fieldType": "checkbox",
        "name": "married",
        "label": "Married",
        "value": 0
    }
]

function DynamicForm() {

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget),
                    formDataObj = Object.fromEntries(formData.entries())
                console.log(formDataObj)
            }}>
                {jsonform.map((item) => decodeInput(item))}
                <Button type="submit">Submit</Button>
            </Form>
        </>
    )
}
export default DynamicForm;


function decodeInput(input: InputDescription) {
    switch (input.fieldType) {
        case "text":
            return (
                <>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control name={input.name} defaultValue={input.value} />
                </>
            )
        case "number":
            return (
                <>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control name={input.name} defaultValue={input.value} />
                </>
            )
        case "checkbox":
            return (
                <>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox name={input.name} defaultChecked={input.value === 1} aria-label="Checkbox for following text input" />
                        <Form.Label>{input.label}</Form.Label>
                    </InputGroup>
                </>
            )
        default:
            return <></>
    }
}