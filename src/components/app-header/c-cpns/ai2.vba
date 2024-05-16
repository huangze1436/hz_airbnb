Function CalculateAverageHours()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    Dim totalHours As Double
    Dim totalDays As Integer
    Dim dailyHours As Double
    Dim staffHours As Double
    Dim staffDays As Integer
    Dim staffRate As Double: staffRate = 61.29
    
    Dim i As Integer
    For i = 2 To ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
        If ws.Cells(i, 2).Value <> "" And ws.Cells(i, 4).Value <> "" Then ' Check if punch in and punch out times are recorded
            Dim startTime As Double
            Dim endTime As Double
            
            'can be used
            
            startTime = ws.Cells(i, 2).Value + ws.Cells(i, 3).Value / 60
            endTime = ws.Cells(i, 4).Value + ws.Cells(i, 5).Value / 60
            
            dailyHours = endTime - startTime
            If dailyHours > 8 Then dailyHours = 8 ' Apply 8 hours cap
            
            ' Deduct lunch break
            If startTime <= 12 And endTime >= 13 Then
                dailyHours = dailyHours - 1
            ' Deduct dinner break if no lunch break is taken
            ElseIf startTime > 12 And endTime >= 18.5 Then
                dailyHours = dailyHours - 0.5
            End If
            
            totalHours = totalHours + dailyHours
            totalDays = totalDays + 1
            
            ' Track individual staff member's hours
            If ws.Cells(i, 1).Value = "SpecificStaffID" Then ' Example condition to track specific staff
                staffHours = staffHours + dailyHours
                staffDays = staffDays + 1
            End If
        End If
    Next i
    
    ' Output average for specific staff member
    If staffDays > 0 Then
        ws.Cells(1, 6).Value = "Average Daily Hours: " & staffHours / staffDays
        ws.Cells(1, 7).Value = "Average Pay: $" & (staffHours / staffDays) * staffRate
    Else
        ws.Cells(1, 6).Value = "Average Daily Hours: 0"
        ws.Cells(1, 7).Value = "Average Pay: $0"
    End If
    
    ' Output overall average
    If totalDays > 0 Then
        ws.Cells(2, 6).Value = "Total Average Daily Hours: " & totalHours / totalDays
        ws.Cells(2, 7).Value = "Total Average Pay: $" & (totalHours / totalDays) * staffRate
    Else
        ws.Cells(2, 6).Value = "Total Average Daily Hours: 0"
        ws.Cells(2, 7).Value = "Total Average Pay: $0"
    End If
End Function