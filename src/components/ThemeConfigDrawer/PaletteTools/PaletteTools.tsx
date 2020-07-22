import React from "react"
import NestedListItem from "src/components/NestedListItem"
import List from "@material-ui/core/List"
import ThemeTypeInput from "./ThemeTypeInput"
import ColorInputListItem from "./ColorInputListItem"
import { Grid, Typography } from "@material-ui/core"
import PaletteSubType from "./PaletteSubType"

const paletteColorTypes = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
]

export default function PaletteTools({ getThemeValue }) {
  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="baseline"
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          borderBottom: "1px solid grey",
        }}
      >
        <Grid item>
          <Typography variant="overline">Palette</Typography>
        </Grid>
        <Grid item>
          <ThemeTypeInput getThemeValue={getThemeValue} />
        </Grid>
      </Grid>
      <PaletteSubType
        getThemeValue={getThemeValue}
        title="Background"
        paletteValues={[
          ["Default", "palette.background.default"],
          ["Paper", "palette.background.paper"],
        ]}
      />
      <PaletteSubType
        getThemeValue={getThemeValue}
        title="Text"
        paletteValues={[
          ["Primary", "palette.text.primary"],
          ["Secondary", "palette.text.secondary"],
          ["Disabled", "palette.text.disabled"],
          ["Hint", "palette.text.hint"],
        ]}
      />
      {paletteColorTypes.map(colorType => (
        <PaletteSubType
          key={colorType}
          getThemeValue={getThemeValue}
          title={colorType}
          paletteValues={[
            ["Main", `palette.${colorType}.main`],
            ["Light", `palette.${colorType}.light`],
            ["Dark", `palette.${colorType}.dark`],
            ["Contrast Text", `palette.${colorType}.contrastText`],
          ]}
        />
      ))}
      <PaletteSubType
        getThemeValue={getThemeValue}
        title="Divider"
        paletteValues={[["Divider", "palette.divider"]]}
      />
    </>
    // <NestedListItem primary="Palette" openOnMount>
    //   <List disablePadding>
    //     <ThemeTypeInput getThemeValue={getThemeValue} />
    //     <NestedListItem primary="Background">
    //       <List disablePadding>
    //         <ColorInputListItem
    //           label="Default"
    //           getThemeValue={getThemeValue}
    //           path="palette.background.default"
    //           showAuto
    //         />
    //         <ColorInputListItem
    //           label="Paper"
    //           getThemeValue={getThemeValue}
    //           path="palette.background.paper"
    //           showAuto
    //         />
    //       </List>
    //     </NestedListItem>
    //     <NestedListItem primary="Text">
    //       <List disablePadding>
    //         <ColorInputListItem
    //           label="Primary"
    //           getThemeValue={getThemeValue}
    //           path={`palette.text.primary`}
    //           showAuto
    //         />
    //         <ColorInputListItem
    //           label="Secondary"
    //           getThemeValue={getThemeValue}
    //           path={`palette.text.secondary`}
    //           showAuto
    //         />
    //         <ColorInputListItem
    //           label="Disabled"
    //           getThemeValue={getThemeValue}
    //           path={`palette.text.disabled`}
    //           showAuto
    //         />
    //         <ColorInputListItem
    //           label="Hint"
    //           getThemeValue={getThemeValue}
    //           path={`palette.text.hint`}
    //           showAuto
    //         />
    //       </List>
    //     </NestedListItem>
    //     {paletteColorTypes.map(colorType => (
    //       <NestedListItem primary={colorType} key={colorType}>
    //         <List disablePadding>
    //           <ColorInputListItem
    //             label="Main"
    //             getThemeValue={getThemeValue}
    //             path={`palette.${colorType}.main`}
    //           />
    //           <ColorInputListItem
    //             label="Light"
    //             getThemeValue={getThemeValue}
    //             path={`palette.${colorType}.light`}
    //             showAuto
    //           />
    //           <ColorInputListItem
    //             label="Dark"
    //             getThemeValue={getThemeValue}
    //             path={`palette.${colorType}.dark`}
    //             showAuto
    //           />
    //           <ColorInputListItem
    //             label="Contrast Text"
    //             getThemeValue={getThemeValue}
    //             path={`palette.${colorType}.contrastText`}
    //             showAuto
    //           />
    //         </List>
    //       </NestedListItem>
    //     ))}
    //   </List>
    // </NestedListItem>
  )
}