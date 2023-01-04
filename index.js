function calculate() {
    let noOfMeeting, noOfWorkingDays, meetingDuration, noOfParticipants, avgRate, costBasis;

    let timeSpent, costSpent;

    let savedHrPerMeeting, savedCostPerMeeting, savedHrPerMin, savedCostPerMin, totalTimeSave, totalMoneySave;

    noOfMeeting = document.getElementById("noOfMeeting").value; //B5
    noOfWorkingDays = document.getElementById("noOfWorkingDays").value; //B8
    meetingDuration = document.getElementById("meetingDuration").value; //B11
    noOfParticipants = document.getElementById("noOfParticipants").value; //B14
    avgRate = document.getElementById("avgRate").value; //B17

    costBasis = document.getElementById("costBasis").value;
    savingBasis = document.getElementById("savingBasis").value;

    if (costBasis == "weekly") {
        timeSpent = ((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60).toFixed(4); //E8
        costSpent = (timeSpent * avgRate).toFixed(4); //E11
    } else {
        timeSpent = (((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants / 60) * 4.33)).toFixed(4);
        costSpent = (timeSpent * avgRate).toFixed(4);
    }

    if (savingBasis == "weekly") {
        savedHrPerMeeting = Math.round(((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60) -
            (((noOfMeeting - 1) * noOfWorkingDays * meetingDuration * noOfParticipants) / 60)); //I9

        savedCostPerMeeting = Math.round((((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60 * avgRate) - (savedHrPerMeeting * avgRate))); //J9

        savedHrPerMin = Math.round(((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60) - ((noOfMeeting * noOfWorkingDays * (meetingDuration - 5) * noOfParticipants) / 60)); //I12

        savedCostPerMin = Math.round(((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60 * avgRate) -
            ((noOfMeeting * noOfWorkingDays * (meetingDuration - 5) * noOfParticipants) / 60 * avgRate)); //J12

        totalTimeSave = savedHrPerMeeting + savedHrPerMin;

        totalMoneySave = savedCostPerMeeting + savedCostPerMin;
    } else {
        savedHrPerMeeting = Math.round((((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60) - (((noOfMeeting - 1) * noOfWorkingDays * meetingDuration * noOfParticipants) / 60)) * 4.33);

        savedCostPerMeeting = Math.round((((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60 * avgRate * 4.33) - (savedHrPerMeeting * avgRate)));

        savedHrPerMin = Math.round((((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60) * 4.33) - (((noOfMeeting * noOfWorkingDays * (meetingDuration - 5) * noOfParticipants) / 60) * 4.33));


        savedCostPerMin = Math.round(((noOfMeeting * noOfWorkingDays * meetingDuration * noOfParticipants) / 60 * avgRate * 4.33) -
            ((noOfMeeting * noOfWorkingDays * (meetingDuration - 5) * noOfParticipants) / 60 * avgRate * 4.33));

        totalTimeSave = savedHrPerMeeting + savedHrPerMin;

        totalMoneySave = savedCostPerMeeting + savedCostPerMin;
    }

    document.getElementById("timeSpent").value = timeSpent;
    document.getElementById("costSpent").value = costSpent;
    document.getElementById("savedHrPerMeeting").value = savedHrPerMeeting;
    document.getElementById("savedCostPerMeeting").value = savedCostPerMeeting;
    document.getElementById("savedHrPerMin").value = savedHrPerMin;
    document.getElementById("savedCostPerMin").value = savedCostPerMin;
    document.getElementById("totalTimeSave").value = totalTimeSave;
    document.getElementById("totalMoneySave").value = totalMoneySave;


}