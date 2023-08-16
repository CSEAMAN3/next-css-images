import { Foldit, Poppins } from "next/font/google";

//variable font
const foldit = Foldit({
  subsets: ["latin"],
});

//non variable fonts
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function FunkyFont() {
  return (
    <div className={foldit.className}>
      <h2>Funky Fonts</h2>
      <p className={`${poppins.className} font-bold`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas quasi temporibus molestiae voluptatum,
        cupiditate nesciunt. Possimus, quisquam dolore. Aut?
      </p>
    </div>
  );
}
