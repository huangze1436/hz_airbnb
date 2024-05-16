' stafflist（员工列表）和punchedtimes（打卡记录表）
Function averagehours(stafflist, punchedtimes)

Dim inputrowsa As Integer,
    inputrowsb As Integer,
    ' 累计单个员工的工作小时数
    staffhours As Double,
    ' 实际有工作记录的员工数量
    numberofincludedstaff As Integer,
    ' 所有员工总的工作小时数
    stafftotalhours As Double
    ' 存储stafflist表中的总行数
inputrowsa = stafflist.Rows.Count
' 是一个动态数组，用于存储每个员工的平均工作小时数及其对应的某种计算结果
Dim o() As Double
' 每一行代表一个员工，第一列存放平均工作小时，第二列存放基于此小时数的计算结果。
ReDim o(inputrowsa, 1) As Double
' 示例中设为283，表示punchedtimes表中的最大行数需要检查。
    inputrowsb = 283
For staff = 1 To inputrowsa
    For punch = 1 To inputrowsb
        ' 统一单位 按照小时来换算
        ' 修改变量命名 做到见名知意  
        startHour = punchedtimes.Cells(punch, 3)
        startMinChangeToHour = punchedtimes.Cells(punch, 4) / 60
        endHour = punchedtimes.Cells(punch, 5)
        endMinChangeToHour = punchedtimes.Cells(punch, 6) / 60

        If punchedtimes.Cells(punch, 2) = stafflist.Cells(staff, 1) Then  'why
            ' If startHour <> "" And startMin <> "" And endHour <> "" And endMin <> "" Then
            '     '< =
            
            '     If (startHour < 12 Or (startHour = 12 And startMin = 0)) And (endHour > 13 Or (endHour = 13 And endMin = 0)) Then
            '         staffdays = staffdays + 1
            '         staffhours = staffhours + endHour + endMinChangeToHour - startHour - startMinChangeToHour - 1
            '         ElseIf (startHour > 12 Or (startHour = 12 And startMin >= 0)) And (endHour > 18 Or (endHour = 18 And endMin >= 30)) Then
            '         staffdays = staffdays + 1
            '         staffhours = staffhours + endHour + endMinChangeToHour - startHour - startMinChangeToHour - 0.5
            '         Else
            '             staffdays = staffdays + 1
            '             staffhours = staffhours + WorksheetFunction.Min(endHour + endMinChangeToHour - startHour - startMinChangeToHour, 8)
            '         End If
            '     End If
            ' End If
        Next punch
        If staffdays > 0 Then
            o(staff - 1, 0) = staffhours / staffdays   
            o(staff - 1, 1) = staffhours / staffdays * 61.29
            If staffhours > 0 Then
                numberofincludedstaff = numberofincludedstaff + 1
            End If
        Else
            o(staff - 1, 0) = 0
            o(staff - 1, 1) = 0
        End If
Next staff
If numberofincludedstaff > 0 Then
        For staff = 1 To inputrowsa
            stafftotalhours = stafftotalhours + o(staff - 1, 0)
            Next staff
            
            o(inputrowsa, 0) = stafftotalhours / inputrowsa 
            o(inputrowsa, 1) = stafftotalhours / inputrowsa * 61.29
        Else
            o(inputrowsa, 0) = 0
            o(inputrowsa, 1) = 0
    End If
    averagehours = o()

End Function