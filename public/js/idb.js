let db;

const request = indexedDB.open("budget_tracker", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("new_txn", { autoIncrement: true });
};

request.onsuccess = function (event) {
    // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
    db = event.target.result;

    if (navigator.online) {
        uploadTxn();
    }
};

request.onerror = function (event) {
    console.log(event.target.errorCode);
};

// This function will be executed if we attempt to submit a new transaction and there's no internet connection
function saveRecord(record) {
    const transaction = db.transaction(["new_txn"], "readwrite");
    const txnObjectStore = transaction.objectStore("new_txn");
    txnObjectStore.add(record);
}

function uploadTxn() {
    //open a transaction on your db
    const transaction = db.transaction(["new_txn"], "readwrite");
    //access your object store
    const txnObjectStore = transaction.objectStore("new_txn");
    //get all records from store and set to a variable;
    const getAll = txnObjectStore.getAll();

    //upon a successful .getAll() execution run this function
    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch("/api/transaction", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((serverResponse) => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    //otherwise open another transaction
                    const transaction = db.transaction(
                        ["new_txn"],
                        "readwrite"
                    );
                    const txnObjectStore = transaction.objectStore("new_txn");
                    txnObjectStore.clear();
                    alert("All saved txn(s) submitted!");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
}

window.addEventListener("online", uploadTxn);
