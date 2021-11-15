import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function AutocompleteInput({ formData, setFormData }) {
  const [techList, setTechList] = React.useState([{ name: "" }]);

  React.useEffect(() => {
    async function getAllTechnology() {
      let response = await fetch(
        `https://incrudibles.herokuapp.com/technologies`
      );
      let techStack = await response.json();
      setTechList(techStack.payload);
    }
    getAllTechnology();
  }, []);

  return (
    <Stack spacing={3} sx={{ width: "95", pt: 2 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={techList.map((option) => option.name)}
        defaultValue={[]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Current tech stack"
            placeholder="Start typing to add a technology..."
            onBlur={() => {
              const x = document.querySelectorAll(".MuiChip-label");
              const listOfTech = [];
              x.forEach((item) => listOfTech.push(item.innerText));
              setFormData({ ...formData, current_tech_stack: listOfTech });
            }}
          />
        )}
      />
    </Stack>
  );
}
