import * as v from "valibot";
import { localData } from "../mockData/localData";

export const requestSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.nonEmpty("A.u.b. vul hier je voornaam in"),
    v.minLength(2, "Bevat minimum van 2 karakters"),
  ),
  lastName: v.pipe(
    v.string(),
    v.nonEmpty("A.u.b. vul hier je achternaam in."),
    v.minLength(2, "Bevat minimum van 2 karakters"),
  ),
  dateOfBirth: v.pipe(
    v.string(),
    v.nonEmpty("A.u.b. vul hier je geboortedatum in."),
    v.custom((value) => {
      const today = new Date();
      const birthDate = new Date(value as string);
      const isValidDate = !isNaN(birthDate.getTime());
      const isAdult =
        today.getFullYear() - birthDate.getFullYear() > 18 ||
        (today.getFullYear() - birthDate.getFullYear() === 18 &&
          today.getMonth() >= birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());

      return isValidDate && isAdult;
    }, "Je moet minimaal 18 jaar zijn"),
  ),
  email: v.pipe(
    v.string(),
    v.nonEmpty("A.u.b. vul hier je email in."),
    v.email("Het email is verkeerd geformatteerd"),
  ),
  list: v.pipe(
    v.picklist(
      localData.map((item) => item.name),
      "A.u.b. selecteer een verzekering",
    ),
    v.nonEmpty("A.u.b. selecteer een verzekering"),
  ),
});
