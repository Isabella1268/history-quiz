const QUESTIONS = [
      // ΕΝΟΤΗΤΑ 1 — Το Μεγάλο Σχίσμα
  {
    q: "Ποια ήταν η άποψη της Ανατολικής Εκκλησίας σχετικά με την εξουσία του Πάπα;",
    a: [
      "Θεωρούσε ότι ο Πάπας είχε ανώτατη εξουσία σε ολόκληρη την Εκκλησία.",
      "Αρνιόταν οποιαδήποτε αναγνώριση του επισκόπου της Ρώμης.",
      "Αναγνώριζε την πρώτη θέση τιμής, αλλά όχι εξουσία πάνω στους άλλους Πατριάρχες."
    ],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Istanbul%20Turkey.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Τι υποστήριζε η Δυτική Εκκλησία για τον Πάπα;",
    a: [
      "Ότι ως διάδοχος του Αποστόλου Πέτρου είχε ιδιαίτερη εξουσία για ολόκληρη την Εκκλησία.",
      "Ότι οι αποφάσεις έπρεπε να λαμβάνονται αποκλειστικά από Συνόδους.",
      "Ότι δεν είχε θρησκευτική εξουσία πέρα από τη Ρώμη."
    ],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/St%20Peter%27s%20Basilica%20Vatican.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Τι σημαίνει η λατινική λέξη Filioque;",
    a: ["Και εκ του Πατρός.", "Δια του Πνεύματος.", "Και εκ του Υιού."],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Trinity%20Holy%20Spirit%20dove.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Πότε επικράτησε η προσθήκη του Filioque στη λειτουργική λατρεία της Ρώμης;",
    a: ["Το 1014.", "Το 1054.", "Το 800."],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vatican%20St%20Peter%27s%20Square.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Ποια ήταν η κύρια γλώσσα της Ανατολικής Εκκλησίας στη θεολογία και στη λατρεία;",
    a: ["Η λατινική.", "Η συριακή.", "Η ελληνική."],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Byzantine%20mosaic%20Hagia%20Sophia.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Ποιος ήταν επικεφαλής των απεσταλμένων του Πάπα που πήγαν στην Κωνσταντινούπολη τον Ιούλιο του 1054;",
    a: ["Ο Πατριάρχης Μιχαήλ Κηρουλάριος.", "Ο Απόστολος Πέτρος.", "Ο καρδινάλιος Ουμβέρτος."],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Istanbul.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Πώς απάντησε ο Πατριάρχης Κωνσταντινουπόλεως στην πράξη των παπικών απεσταλμένων το 1054;",
    a: [
      "Συγκάλεσε Σύνοδο και αφόρισε τους παπικούς απεσταλμένους.",
      "Υπέγραψε συνθήκη ειρήνης.",
      "Έφυγε από την Κωνσταντινούπολη."
    ],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20interior.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Πού βρισκόταν πολιτικά η Ανατολική Εκκλησία;",
    a: [
      "Στη Ρωμαϊκή Αυτοκρατορία, συνεργαζόμενη με τον Πάπα.",
      "Στη Βυζαντινή Αυτοκρατορία, συνεργαζόμενη στενά με τον αυτοκράτορα.",
      "Ήταν ανεξάρτητη από κάθε πολιτική αρχή."
    ],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Byzantine%20Empire%201000%20map.jpg",
    credit: "Wikimedia Commons"
  },

  // ΕΝΟΤΗΤΑ 2 — Συνέπειες του Σχίσματος και Σταυροφορίες
  {
    q: "Σε ποιες δύο Εκκλησίες χωρίστηκε ο Χριστιανισμός;",
    a: ["Ορθόδοξη και Προτεσταντική.", "Ορθόδοξη και Ρωμαιοκαθολική.", "Καθολική και Αγγλικανική."],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Christianity%20branches.svg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Ποιος Πατριάρχης ενίσχυσε σταδιακά την πνευματική του κυριαρχία στην Ανατολή;",
    a: ["Πατριάρχης Αλεξανδρείας.", "Πατριάρχης Αντιοχείας.", "Πατριάρχης Κωνσταντινουπόλεως."],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Patriarchal%20Church%20of%20St%20George%20Istanbul.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Ποια σημαντική ήττα υπέστη το Βυζάντιο το 1071;",
    a: ["Ήττα στο Ματζικέρτ.", "Άλωση της Κωνσταντινούπολης.", "Ήττα στη Ναυμαχία της Ναυπάκτου."],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle%20of%20Manzikert.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Τι συνέβη στις σχέσεις Ανατολής και Δύσης μετά το Σχίσμα;",
    a: ["Βελτιώθηκαν.", "Αυξήθηκαν η αντιπαλότητα και η δυσπιστία.", "Δεν άλλαξε τίποτα."],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Schism%201054.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Ποια Σταυροφορία οδήγησε στην κατάληψη της Κωνσταντινούπολης;",
    a: ["Πρώτη.", "Δεύτερη.", "Τέταρτη."],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Conquest%20of%20Constantinople%201204.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Τι προσπάθησαν να επιβάλουν οι Δυτικοί στις περιοχές που κατέκτησαν;",
    a: ["Τα λατινικά ήθη και έθιμα.", "Τα αρχαία ελληνικά έθιμα.", "Τα βυζαντινά έθιμα."],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Crusaders%20Constantinople%201204.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Ποιο κίνημα εμφανίστηκε αργότερα στη Δυτική Εκκλησία;",
    a: ["Ο Ανθρωπισμός.", "Ο Προτεσταντισμός.", "Η Αναγέννηση."],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin%20Luther%20by%20Lucas%20Cranach.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Το Σχίσμα ενίσχυσε την ενότητα Ανατολής και Δύσης.",
    a: ["Σωστό.", "Λάθος."],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Schism%20map.svg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Η Τέταρτη Σταυροφορία έγινε την περίοδο 1202–1204.",
    a: ["Σωστό.", "Λάθος."],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Fourth%20Crusade%20map.png",
    credit: "Wikimedia Commons"
  },
  {
    q: "Στην Ανατολή διατηρήθηκε το συνοδικό σύστημα διοίκησης της Εκκλησίας.",
    a: ["Σωστό.", "Λάθος."],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Orthodox%20bishops%20council.jpg",
    credit: "Wikimedia Commons"
  },

  // ΕΝΟΤΗΤΑ 3 — Ιστορικά έργα τέχνης
  {
    q: "Πότε δημιουργήθηκε η «Πομπή των Μάγων»;",
    a: ["1755–1756.", "1459–1460.", "1982–1983.", "1023–1024."],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Benozzo%20Gozzoli%20-%20Procession%20of%20the%20Magi.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Σε ποιο χρονικό υπήρχαν οι συγκεκριμένες μικρογραφίες;",
    a: ["Ευγένιου Ντελακρουά.", "Ιωάννη Η΄ Παλαιολόγου.", "Ιωάννη Σκυλίτζη.", "Μιχαήλ Κηρουλάριου."],
    correct: 2,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Skylitzes%20Chronicle.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Πού βρίσκεται το έργο «Η Είσοδος των Σταυροφόρων στην Κωνσταντινούπολη»;",
    a: ["Στο Λούβρο.", "Στην Αγία Σοφία.", "Στο Παρεκκλήσι των Μάγων της Φλωρεντίας.", "Στο Βρετανικό Μουσείο."],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Delacroix%20-%20The%20Entry%20of%20the%20Crusaders%20into%20Constantinople.jpg",
    credit: "Wikimedia Commons"
  },
  {
    q: "Πότε συνέβη επισήμως το Μεγάλο Σχίσμα μεταξύ Ανατολικής και Δυτικής Εκκλησίας;",
    a: ["1204", "1054", "1453"],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sainte-Sophie-mosaique-empereur-offrant-basilique.jpg?width=1000",
    credit: "Wikimedia Commons · Βυζαντινό ψηφιδωτό της Αγίας Σοφίας",
  },
  {
    q: "Ποιος Βυζαντινός αυτοκράτορας επεδίωξε την ένωση των Εκκλησιών στη Σύνοδο της Λυών (1274);",
    a: [
      "Μιχαήλ Η΄ Παλαιολόγος",
      "Ιωάννης Η΄ Παλαιολόγος",
      "Κωνσταντίνος ΙΑ΄ Παλαιολόγος",
    ],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/152_-_Michael_VIII_Palaiologos_%28Mutinensis_-_color%29.png?width=900",
    credit: "Wikimedia Commons · Μικρογραφία του Μιχαήλ Η΄ Παλαιολόγου",
  },
  {
    q: "Ποιο ήταν το κύριο κίνητρο των Βυζαντινών αυτοκρατόρων για την άρση του Σχίσματος κατά τον Μεσαίωνα;",
    a: [
      "Η αλλαγή των θρησκευτικών τους πεποιθήσεων",
      "Η εξασφάλιση στρατιωτικής και πολιτικής βοήθειας από τη Δύση",
      "Η επέκταση της αυτοκρατορίας προς τη δυτική Ευρώπη",
    ],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Michael_VIII_Palaiologos.jpg?width=900",
    credit: "Wikimedia Commons · Απεικόνιση του Μιχαήλ Η΄",
  },
  {
    q: "Γιατί απέτυχε τελικά η προσπάθεια ένωσης στη Σύνοδο της Λυών;",
    a: [
      "Επειδή δεν εμφανίστηκε η βυζαντινή αντιπροσωπεία",
      "Λόγω των μεγάλων αξιώσεων του Πάπα και των έντονων αντιδράσεων στην Ανατολή",
      "Επειδή μεσολάβησε η Άλωση της Πόλης",
    ],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Union_1439.jpg?width=1000",
    credit: "Wikimedia Commons · Έγγραφο της Ένωσης του 1439",
  },
  {
    q: "Ποια ήταν η δεύτερη πολύ σημαντική Σύνοδος που έγινε τον 15ο αιώνα (1438–1439) για την ένωση των Εκκλησιών;",
    a: [
      "Η Σύνοδος της Νίκαιας",
      "Η Σύνοδος της Φερράρας-Φλωρεντίας",
      "Η Σύνοδος της Κωνσταντινούπολης",
    ],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Council-Florence.png?width=900",
    credit: "Wikimedia Commons · Σύνοδος της Φλωρεντίας",
  },
  {
    q: "Ποιο δογματικό ζήτημα σχετικά με το Άγιο Πνεύμα αποτελούσε το βασικό αγκάθι στις συζητήσεις για την ένωση;",
    a: [
      "Η προσθήκη του «Filioque» (και εκ του Υιού) στο Σύμβολο της Πίστεως",
      "Ο τρόπος με τον οποίο γίνεται η βάπτιση",
      "Η γλώσσα στην οποία γράφονται τα εκκλησιαστικά βιβλία",
    ],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Filioque.JPG?width=1000",
    credit: "Wikimedia Commons · Η διατύπωση Filioque",
  },
  {
    q: "Ποιος κορυφαίος Έλληνας ιεράρχης αρνήθηκε κατηγορηματικά να υπογράψει τον όρο της Ένωσης στη Φλωρεντία;",
    a: [
      "Ο Πατριάρχης Ιωσήφ Β΄",
      "Ο Μάρκος ο Ευγενικός (Επίσκοπος Εφέσου)",
      "Ο Βησσαρίων ο Νικαίας",
    ],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mark_of_Ephesus.jpg?width=800",
    credit: "Wikimedia Commons · Τοιχογραφία του Μάρκου Ευγενικού",
  },
  {
    q: "Πώς αντέδρασε η συντριπτική πλειοψηφία του ορθόδοξου λαού στην υπογραφή της ένωσης στη Φλωρεντία;",
    a: [
      "Την απέρριψε σθεναρά, θεωρώντας την προδοσία της πίστης",
      "Την αποδέχθηκε αμέσως με μεγάλους πανηγυρισμούς",
      "Αδιαφόρησε πλήρως για το αποτέλεσμα",
    ],
    correct: 0,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Firenze-bolla-unione.jpg?width=1000",
    credit: "Wikimedia Commons · Η βούλα της Ένωσης του 1439",
  },
  {
    q: "Ποιοι θρησκευτικοί ηγέτες έκαναν το πρώτο ιστορικό βήμα συμφιλίωσης συναντώμενοι στα Ιεροσόλυμα το 1964;",
    a: [
      "Ο Πάπας Ιωάννης Παύλος Β΄ και ο Πατριάρχης Βαρθολομαίος",
      "Ο Πάπας Παύλος ΣΤ΄ και ο Οικουμενικός Πατριάρχης Αθηναγόρας",
      "Ο Πάπας Λέων Θ΄ και ο Πατριάρχης Μιχαήλ Κηρουλάριος",
    ],
    correct: 1,
    img: "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2024/01/Pope-Paul-VI-meets-Orthodox-Patriarch-Athenagoras-I-AFP-000_ARP2291317.jpg",
    credit:
      "Greek Orthodox Archdiocese of America · Συνάντηση Παύλου ΣΤ΄ και Αθηναγόρα",
  },
  {
    q: "Τι συνέβη τελικά στις 7 Δεκεμβρίου του 1965 που άλλαξε τις σχέσεις των δύο Εκκλησιών;",
    a: [
      "Ενώθηκαν οριστικά οι δύο Εκκλησίες σε μία",
      "Έγινε ταυτόχρονη ανάκληση των αμοιβαίων αφορισμών (αναθεμάτων) του 1054",
      "Καταργήθηκε το πρωτείο του Πάπα",
    ],
    correct: 1,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/2019-07-25_Interior_of_Hagia_Sophia_1.jpg?width=1000",
    credit: "Wikimedia Commons · Εσωτερικό της Αγίας Σοφίας",
  },
];

const $ = (id) => document.getElementById(id);
const KEY = "historyArenaRoom_v1";

let room = null;
let timerInterval = null;
let playerId = null;
let lastPlayerState = "";

const mode = new URLSearchParams(location.search).get("mode") || "host";

function show(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));
  $(id).classList.remove("hidden");
}

function readRoom() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

function saveRoom() {
  localStorage.setItem(KEY, JSON.stringify(room));
}

function makeCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function sortedPlayers() {
  return [...(room?.players || [])].sort((a, b) => b.score - a.score);
}

function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

// ΔΗΜΙΟΥΡΓΙΑ ΔΩΜΑΤΙΟΥ

function createRoom() {
  room = {
    code: makeCode(),
    status: "lobby",
    questionIndex: -1,
    timeLeft: 20,
    players: [],
    roundResults: [],
  };

  saveRoom();

  $("roomCode").textContent = room.code;
  $("playerUrl").textContent = location.href.split("?")[0] + "?mode=player";
  $("playerCount").textContent = "0";
  $("lobbyPlayers").textContent = "Περιμένουμε τους πρώτους παίκτες…";
  $("lobbyPlayers").classList.add("empty-list");
  $("startGameBtn").disabled = true;

  show("hostScreen");

  $("lobbyPanel").classList.remove("hidden");
  $("questionHostPanel").classList.add("hidden");
  $("resultHostPanel").classList.add("hidden");
  $("finalHostPanel").classList.add("hidden");

  $("hostTitle").textContent = "Το δωμάτιό σου";
  $("hostSubtitle").textContent = "Περίμενε να συνδεθούν οι παίκτες.";
}

// ΕΜΦΑΝΙΣΗ ΠΑΙΚΤΩΝ ΣΤΟ LOBBY

function renderLobby() {
  if (!room) return;

  $("playerCount").textContent = room.players.length;

  $("startGameBtn").disabled = room.players.length === 0;

  $("lobbyPlayers").classList.toggle("empty-list", room.players.length === 0);

  $("lobbyPlayers").innerHTML = room.players.length
    ? room.players
        .map(
          (p, i) =>
            `<span class="player-chip">${i + 1}. ${escapeHtml(p.name)}</span>`,
        )
        .join("")
    : "Περιμένουμε τους πρώτους παίκτες…";
}

// ΕΝΑΡΞΗ ΕΡΩΤΗΣΗΣ

function startQuestion() {
  clearInterval(timerInterval);

  room.status = "question";
  room.questionIndex++;
  room.timeLeft = 20;

  room.players.forEach((p) => {
    p.answer = null;
    p.answeredAt = null;
    p.lastPoints = 0;
  });

  saveRoom();

  $("lobbyPanel").classList.add("hidden");
  $("resultHostPanel").classList.add("hidden");
  $("finalHostPanel").classList.add("hidden");

  $("questionHostPanel").classList.remove("hidden");

  renderHostQuestion();

  timerInterval = setInterval(tick, 1000);
}

// ΕΜΦΑΝΙΣΗ ΕΡΩΤΗΣΗΣ ΣΤΟΝ HOST

function renderHostQuestion() {
  const q = QUESTIONS[room.questionIndex];

  $("questionCounter").textContent =
    `ΕΡΩΤΗΣΗ ${String(room.questionIndex + 1).padStart(2, "0")} / ${QUESTIONS.length}`;

  $("hostQuestionText").textContent = q.q;

  $("hostAnswers").innerHTML = q.a
    .map((a, i) => `<div><b>${"ABC"[i]}</b>${escapeHtml(a)}</div>`)
    .join("");

  $("hostQuestionImage").src = q.img;
  $("hostImageCredit").textContent = q.credit;

  $("hostTimer").textContent = room.timeLeft;

  $("hostProgress").style.width = (room.timeLeft / 20) * 100 + "%";

  $("answerCount").textContent =
    `${room.players.filter((p) => p.answer !== null).length} / ${room.players.length}`;

  $("revealBtn").disabled = room.players.some((p) => p.answer === null);

  $("hostSubtitle").textContent =
    `Ερώτηση ${room.questionIndex + 1} από ${QUESTIONS.length}`;
}

// ΧΡΟΝΟΜΕΤΡΟ 20 ΔΕΥΤΕΡΟΛΕΠΤΩΝ

function tick() {
  if (!room || room.status !== "question") return;

  room.timeLeft = Math.max(0, room.timeLeft - 1);

  saveRoom();

  $("hostTimer").textContent = room.timeLeft;

  $("hostProgress").style.width = (room.timeLeft / 20) * 100 + "%";

  $("answerCount").textContent =
    `${room.players.filter((p) => p.answer !== null).length} / ${room.players.length}`;

  $("revealBtn").disabled =
    room.players.some((p) => p.answer === null) && room.timeLeft > 0;

  if (room.timeLeft <= 0) {
    clearInterval(timerInterval);
    revealResults();
  }
}

// ΑΠΟΤΕΛΕΣΜΑΤΑ ΚΑΙ ΒΑΘΜΟΛΟΓΙΑ

function revealResults() {
  if (!room || room.status !== "question") return;

  clearInterval(timerInterval);

  const q = QUESTIONS[room.questionIndex];

  room.status = "result";

  room.players.forEach((p) => {
    let pts = 0;

    if (p.answer === q.correct) {
      const elapsed =
        p.answeredAt == null
          ? 20
          : Math.min(20, Math.max(0, 20 - p.answeredAt));

      pts = Math.round(500 + 500 * (elapsed / 20));
    }

    p.score += pts;
    p.lastPoints = pts;
  });

  room.roundResults.push({
    questionIndex: room.questionIndex,
    correct: q.correct,
  });

  saveRoom();

  $("questionHostPanel").classList.add("hidden");
  $("resultHostPanel").classList.remove("hidden");

  $("correctAnswerText").textContent =
    `Σωστή απάντηση: ${"ABC"[q.correct]}) ${q.a[q.correct]}`;

  $("roundLeaderboard").innerHTML = leaderboardHTML(true);

  $("nextQuestionBtn").textContent =
    room.questionIndex === QUESTIONS.length - 1
      ? "Τελική κατάταξη →"
      : "Επόμενη ερώτηση →";
}

// LEADERBOARD

function leaderboardHTML(round = false) {
  const list = sortedPlayers();

  if (!list.length) {
    return '<p class="muted">Δεν υπάρχουν παίκτες.</p>';
  }

  return list
    .map(
      (p, i) =>
        `<div class="leader-row ${i === 0 ? "first" : ""}">
   <span class="rank">${String(i + 1).padStart(2, "0")}</span>
   <span class="leader-name">
    ${escapeHtml(p.name)}
    ${
      round && p.lastPoints
        ? ` <small style="color:#75d1aa">+${p.lastPoints}</small>`
        : ""
    }
   </span>
   <span class="leader-score">
    ${p.score.toLocaleString("el-GR")} pts
   </span>
  </div>`,
    )
    .join("");
}

// ΤΕΛΙΚΟΣ ΝΙΚΗΤΗΣ

function finishGame() {
  room.status = "finished";

  saveRoom();

  $("resultHostPanel").classList.add("hidden");
  $("finalHostPanel").classList.remove("hidden");

  const winner = sortedPlayers()[0];

  $("winnerName").textContent = winner ? winner.name : "—";

  $("winnerScore").textContent = winner
    ? `${winner.score.toLocaleString("el-GR")} συνολικοί πόντοι`
    : "";

  $("finalLeaderboard").innerHTML = leaderboardHTML();

  $("hostTitle").textContent = "Η πρόκληση ολοκληρώθηκε";
  $("hostSubtitle").textContent = "Η τελική κατάταξη των παικτών.";
}

// ΛΕΙΤΟΥΡΓΙΕΣ HOST

function startHost() {
  show("homeScreen");

  $("createRoomBtn").addEventListener("click", createRoom);

  $("startGameBtn").addEventListener("click", startQuestion);

  $("revealBtn").addEventListener("click", revealResults);

  $("nextQuestionBtn").addEventListener("click", () =>
    room.questionIndex === QUESTIONS.length - 1
      ? finishGame()
      : startQuestion(),
  );

  $("restartBtn").addEventListener("click", createRoom);

  $("copyLinkBtn").addEventListener("click", () => {
    const url = location.href.split("?")[0] + "?mode=player";

    navigator.clipboard
      ?.writeText(url)
      .then(() => ($("copyLinkBtn").textContent = "✓"))
      .catch(() => {});
  });

  window.addEventListener("storage", (e) => {
    if (e.key === KEY) {
      room = readRoom();

      if (room?.status === "lobby") {
        renderLobby();
      }

      if (room?.status === "question") {
        $("answerCount").textContent =
          `${room.players.filter((p) => p.answer !== null).length} / ${room.players.length}`;

        $("revealBtn").disabled =
          room.players.some((p) => p.answer === null) && room.timeLeft > 0;
      }
    }
  });
}

// ΕΙΣΟΔΟΣ ΠΑΙΚΤΗ

function playerJoin() {
  const code = $("roomInput").value.trim();
  const name = $("nameInput").value.trim();

  const r = readRoom();

  if (!code || !name) {
    $("joinError").textContent = "Συμπλήρωσε τον κωδικό και το όνομά σου.";
    return;
  }

  if (!r || r.code !== code) {
    $("joinError").textContent = "Δεν βρέθηκε δωμάτιο με αυτόν τον κωδικό.";
    return;
  }

  if (r.status !== "lobby") {
    $("joinError").textContent = "Το παιχνίδι έχει ήδη ξεκινήσει.";
    return;
  }

  if (r.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
    $("joinError").textContent = "Αυτό το όνομα χρησιμοποιείται ήδη.";
    return;
  }

  playerId = "p" + Math.random().toString(36).slice(2, 10);

  r.players.push({
    id: playerId,
    name,
    score: 0,
    answer: null,
    answeredAt: null,
    lastPoints: 0,
  });

  localStorage.setItem(KEY, JSON.stringify(r));

  $("playerWelcomeName").textContent = name + "!";

  $("playerJoinPanel").classList.add("hidden");
  $("playerWaitingPanel").classList.remove("hidden");

  room = r;
}

// ΚΑΤΑΧΩΡΙΣΗ ΑΠΑΝΤΗΣΗΣ

function submitAnswer(index) {
  const r = readRoom();

  if (!r || r.status !== "question") return;

  const p = r.players.find((p) => p.id === playerId);

  if (!p || p.answer !== null) return;

  p.answer = index;
  p.answeredAt = 20 - r.timeLeft;

  localStorage.setItem(KEY, JSON.stringify(r));

  $("playerChoices")
    .querySelectorAll("button")
    .forEach((b) => {
      b.disabled = true;
    });

  $("playerAnswerFeedback").textContent = "Η απάντησή σου καταχωρίστηκε!";
}

// ΕΜΦΑΝΙΣΗ ΣΤΟΝ ΠΑΙΚΤΗ

function renderPlayer() {
  const r = readRoom();

  if (!r) return;

  $("playerJoinPanel").classList.add("hidden");

  if (r.status === "lobby") {
    $("playerWaitingPanel").classList.remove("hidden");
    return;
  }

  const p = r.players.find((p) => p.id === playerId);

  if (!p) {
    $("playerJoinPanel").classList.remove("hidden");
    $("playerWaitingPanel").classList.add("hidden");
    return;
  }

  // ΕΡΩΤΗΣΗ

  if (r.status === "question") {
    if (lastPlayerState !== "question" + r.questionIndex) {
      lastPlayerState = "question" + r.questionIndex;

      $("playerWaitingPanel").classList.add("hidden");
      $("playerResultPanel").classList.add("hidden");
      $("playerFinalPanel").classList.add("hidden");

      $("playerQuestionPanel").classList.remove("hidden");

      const q = QUESTIONS[r.questionIndex];

      $("playerQuestionCounter").textContent =
        `ΕΡΩΤΗΣΗ ${String(r.questionIndex + 1).padStart(2, "0")} / ${QUESTIONS.length}`;

      $("playerQuestionText").textContent = q.q;

      $("playerQuestionImage").src = q.img;

      $("playerImageCredit").textContent = q.credit;

      $("playerChoices").innerHTML = q.a
        .map(
          (a, i) =>
            `<button class="choice-btn" data-index="${i}">
     <span class="choice-letter">${"ABC"[i]}</span>
     <span>${escapeHtml(a)}</span>
    </button>`,
        )
        .join("");

      $("playerChoices")
        .querySelectorAll("button")
        .forEach((b) => {
          b.addEventListener("click", () =>
            submitAnswer(Number(b.dataset.index)),
          );
        });

      $("playerAnswerFeedback").textContent = "";

      if (p.answer !== null) {
        $("playerChoices")
          .querySelectorAll("button")
          .forEach((b) => {
            b.disabled = true;
          });

        $("playerAnswerFeedback").textContent = "Η απάντησή σου καταχωρίστηκε!";
      }
    }

    $("playerTimer").textContent = r.timeLeft;

    $("playerProgress").style.width = (r.timeLeft / 20) * 100 + "%";
  }

  // ΑΠΟΤΕΛΕΣΜΑΤΑ ΕΡΩΤΗΣΗΣ
  else if (r.status === "result") {
    lastPlayerState = "result" + r.questionIndex;

    $("playerQuestionPanel").classList.add("hidden");
    $("playerResultPanel").classList.remove("hidden");

    const q = QUESTIONS[r.questionIndex];

    const correct = p.answer === q.correct;

    $("playerResultIcon").textContent = correct ? "✓" : "×";

    $("playerResultIcon").style.color = correct ? "var(--green)" : "var(--red)";

    $("playerResultTitle").textContent = correct
      ? "Σωστή απάντηση!"
      : "Αυτή τη φορά όχι!";

    $("playerResultDetail").textContent =
      `Η σωστή απάντηση ήταν: ${"ABC"[q.correct]}) ${q.a[q.correct]}`;

    $("playerPoints").textContent = "+" + (p.lastPoints || 0);
  }

  // ΤΕΛΙΚΗ ΚΑΤΑΤΑΞΗ
  else if (r.status === "finished") {
    lastPlayerState = "finished";

    $("playerQuestionPanel").classList.add("hidden");
    $("playerResultPanel").classList.add("hidden");
    $("playerFinalPanel").classList.remove("hidden");

    $("playerFinalPoints").textContent = p.score.toLocaleString("el-GR");

    const winner = [...r.players].sort((a, b) => b.score - a.score)[0];

    $("playerFinalMessage").textContent =
      winner?.id === p.id
        ? "Συγχαρητήρια! Είσαι ο μεγάλος νικητής!"
        : `Νικητής: ${winner?.name || "—"}. Μπράβο για τη συμμετοχή σου!`;
  }
}

// ΕΚΚΙΝΗΣΗ ΠΑΙΚΤΗ

function startPlayer() {
  show("playerScreen");

  $("joinBtn").addEventListener("click", playerJoin);

  $("roomInput").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
  });

  window.addEventListener("storage", (e) => {
    if (e.key === KEY) {
      room = readRoom();
      renderPlayer();
    }
  });

  setInterval(() => {
    if (playerId) renderPlayer();
  }, 500);
}

// ΕΚΚΙΝΗΣΗ ΙΣΤΟΣΕΛΙΔΑΣ

if (mode === "player") {
  startPlayer();
} else {
  startHost();
}
