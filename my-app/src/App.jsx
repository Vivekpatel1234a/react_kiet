import './App.css'
import Header from './components/tele.jsx'
import Registration from './components/Registration.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const y = [2025, 2027, 2028, 2029]
  const c = { name: "KIET", location: "Ghaziabad", estdyear: 1998 }

  return (
    <>
      <Header title="My first React App" color="red">
        <h4>This is children demo</h4>
        <p>This demo talks about passing children</p>
        <p>Thanks for reading</p>
      </Header>

      <Header title="Lets Explore FSD" color="blue" />

      <main>
        <Registration />
      </main>

      <Footer
        year={y[3]}
        company="Xebia Organisation"
        college={c}
      />
    </>
  )
}

export default App



/*
✅ git add <filename>

👉 Tab use karte hain jab:

Sirf ek file me change hua ho //mtlb aur sbse koi mtlb nhi bs usi me file ko update krna hai

Baaki changes commit me nahi chahiye

Clean & focused commit banana ho

Example
git add App.jsx
git commit -m "Fix header props"


✔️ Your understanding:

“jab hme bs usi file me change chahte ho”
✅ Correct



✅ git add .

👉 Tab use karte hain jab:

Multiple files update hui ho

New files / folders add hue ho

Project ka ek complete part ready ho

Jo bhi update/add hua hai sab commit karna ho
*/

/*
git status
git add.//jb hme sb kuchh update krna ho like what you have added updated file added i will update on here or added new file in that folder 
git commit -m "object added"
git status
git push -u origin main
*/

/*
git add filename tb use krte hai jb hme bs usi file me change chahte ho
*/














/*
🔹 🤷‍♂️🤷‍♂️git status

👉 Batata hai current state

Kaun-si files modified hain

Kaun-si new (untracked) hain

Kaun-si staged hain (commit ke liye ready)

 Use kab?
 Har step se pehle & baad

🤷‍♂️🤷‍♂️ git add .

 Sab changes stage karta hai

Modified files

New files

New folders

 Use kab?
 Jab jo bhi update/add hua hai sab commit karna ho

🤷‍♂️🤷‍♂️ git commit -m "message"

 Snapshot save karta hai

Staged changes ko history me save karta hai

Message batata hai kya change hua

 Use kab?
 Jab ek logical task complete ho jaye

🤷‍♂️🤷‍♂️ git status (again)

 Confirm karta hai

Commit hua ya nahi

Working tree clean hai ya nahi

 Use kab?
 Commit ke baad check karne ke liye

🤷‍♂️🤷‍♂️ git push -u origin main

 Local code GitHub pe bhejta hai

origin → remote repo

main → branch

-u → future me sirf git push likhne deta hai

 Use kab?
 Pehli baar branch push karte time

 One-line flow (yaad rakhne ke liye)
git status → git add . → git commit → git push

 Interview line

git status checks,
git add prepares,
git commit saves,
git push shares.
*/
