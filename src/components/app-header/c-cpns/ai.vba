Function averagehours(stafflist, punchedtimes)
    Dim staff As Integer, punch As Integer
    Dim inputrowsa As Integer, inputrowsb As Integer
    Dim staffhours As Double, staffdays As Integer
    Dim numberofincludedstaff As Integer, stafftotalhours As Double
    Dim startHour As Double, endHour As Double
    Dim startMin As Double, endMin As Double
    Dim workedHours As Double, dailyHours As Double

    inputrowsa = stafflist.Rows.Count
    inputrowsb = punchedtimes.Rows.Count
    ReDim o(inputrowsa, 1) As Double

    For staff = 1 To inputrowsa
        staffhours = 0
        staffdays = 0

        For punch = 1 To inputrowsb
            If punchedtimes.Cells(punch, 2) = stafflist.Cells(staff, 1) Then
                If Not IsEmpty(punchedtimes.Cells(punch, 3)) And Not IsEmpty(punchedtimes.Cells(punch, 6)) Then
                    startHour = punchedtimes.Cells(punch, 3)
                    startMin = punchedtimes.Cells(punch, 4)
                    endHour = punchedtimes.Cells(punch, 5)
                    endMin = punchedtimes.Cells(punch, 6)
                    workedHours = (endHour + endMin / 60) - (startHour + startMin / 60)

                    ' Apply break deductions and 8-hour cap
                    If startHour <= 12 And endHour >= 13 Then
                        workedHours = Application.Max(0, workedHours - 1)
                    ElseIf startHour > 12 And endHour >= 18.5 Then
                        workedHours = Application.Max(0, workedHours - 0.5)
                    End If

                    dailyHours = Application.Min(workedHours, 8)
                    If dailyHours > 0 Then
                        staffdays = staffdays + 1
                        staffhours = staffhours + dailyHours
                    End If
                End If
            End If
        Next punch

        If staffdays > 0 Then
            o(staff - 1, 0) = staffhours / staffdays
            o(staff - 1, 1) = o(staff - 1, 0) * 61.29
            numberofincludedstaff = numberofincludedstaff + 1
        Else
            o(staff - 1, 0) = 0
            o(staff - 1, 1) = 0
        End If
    Next staff

    If numberofincludedstaff > 0 Then
        stafftotalhours = Application.Sum(Application.Index(o, , 1))
        o(inputrowsa, 0) = stafftotalhours / numberofincludedstaff
        o(inputrowsa, 1) = o(inputrowsa, 0) * 61.29
    Else
        o(inputrowsa, 0) = 0
        o(inputrowsa, 1) = 0
    End If

    averagehours = o
End Function