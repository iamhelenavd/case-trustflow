import * as v from "valibot";
import { localData } from "../mockData/localData";

export const requestSchema = v.object({
  firstName: v.pipe(
    v.string(""),
    v.nonEmpty("A.u.b. vul hier je voornaam in"),
    v.minLength(2, "Bevat minimum van 2 karakters"),
  ),
  lastName: v.pipe(
    v.string(""),
    v.nonEmpty("A.u.b. vul hier je achternaam in."),
    v.minLength(2, "Bevat minimum van 2 karakters"),
  ),
  // Date of Birth Validation
  dateOfBirth: v.pipe(
    v.string(""),
    v.nonEmpty("A.u.b. vul hier je geboortedatum in."),
    v.custom((value) => {
      // Log de waarde van de invoer om te zien wat 'birthday' is
      console.log("Birthday input:", value);

      const today = new Date();
      const birthDate = new Date(value as string);

      // Controleer of de datum geldig is en of de gebruiker minstens 18 jaar oud is
      const isValidDate = !isNaN(birthDate.getTime()); // Zorg ervoor dat het een geldige datum is
      const isAdult =
        today.getFullYear() - birthDate.getFullYear() > 18 ||
        (today.getFullYear() - birthDate.getFullYear() === 18 &&
          today.getMonth() >= birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());

      // Return true als de datum geldig is en de gebruiker minstens 18 jaar oud is
      return isValidDate && isAdult;
    }, "Je moet minimaal 18 jaar zijn"), // Bied hier het foutbericht aan
  ),
  email: v.pipe(
    v.string(""),
    v.nonEmpty("A.u.b. vul hier je email in."),
    v.email("Het email is verkeerd geformatteerd"),
    v.maxLength(30, "Je email is te lang."),
  ),
  list: v.pipe(
    v.picklist(
      localData.map((item) => item.name),
      "A.u.b. selecteer een verzekering",
    ),
    v.nonEmpty("A.u.b. selecteer een verzekering"),
  ),
});
