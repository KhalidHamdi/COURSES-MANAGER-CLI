#! /usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";

const program = new Command();

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter course title: ",
  },
  {
    type: "number",
    name: "price",
    message: "Please enter course price: ",
  },
];

const filePath = "./courses.json";

program
  .name("khalid-courses-manager")
  .description("CLI to make courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("add a course")
  .action((param, option) => {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, fileContent) => {
          if (err) {
            console.log("error", err);
            process.exit();
          }
          console.log("fileContent", fileContent);
          const fileContentAsJson = JSON.parse(fileContent);
          fileContentAsJson.push(answers);
          fs.writeFile(
            filePath,
            JSON.stringify(fileContentAsJson),
            "utf-8",
            () => {
              console.log("Course added successfully");
            }
          );
        });
      } else {
        fs.writeFile(filePath, JSON.stringify([answers]), "utf-8", () => {
          console.log("Course added successfully");
        });
      }
    });
  });

program
  .command("list")
  .alias("l")
  .description("list all courses")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        console.log("error", err);
        process.exit;
      }
      console.table(JSON.parse(content));
    });
  });

program.parse(process.argv);
