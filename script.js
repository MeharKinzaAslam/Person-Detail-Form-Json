

    //Validating Start Date Must Be less Than EndDate


    function CheckDate() {
        var StartDate = document.getElementById('startDate').value;
        var EndDate = document.getElementById('endDate').value;
        if (Date.parse(EndDate) < Date.parse(StartDate)) {

            alert('End Date should be greter than Start Date');
        }
    };


    const submit = document.getElementById('btn');


    submit.addEventListener('click', (ev) => {

        ev.preventDefault();  //to Stop the Form Submitting


        let name = document.getElementById('name').value;
        let DOB = document.getElementById('dob').value;
        let StartDate = document.getElementById('startDate').value;
        let EndDate = document.getElementById('endDate').value;
        let file = document.getElementById('fileUpload').value;

        //empty field Validation
        
        if (!name) {
            alert('enter you name');
        }
        if (!DOB) {
            alert('enter your DOB');
        }
        if (!StartDate) {
            alert('Enter Your Start Date');
        }
        if (!EndDate) {
            alert('Enter End Date');
        }
        if (!file) {
            alert('Plzz Upload File');
        }
        //storing the user input in Object PersonDetails
        let PersonDetail =
        {
            name: name,
            DOB: DOB,
            StartDate: StartDate, 
            EndDate: EndDate,
            file: file,
        }


        // console.log(PersonDetail);
        if(name && DOB && StartDate && EndDate && file) {
            alert("User Details Successfully Saved in json")
            localStorage.setItem('PersonsDetailsHere', JSON.stringify(PersonDetail));

            
        }



        


    }
    );







