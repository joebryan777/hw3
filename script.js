function force()
{
  var mass,acceleration,force;
mass = document.getElementById ("mass").value;
acceleration = document.getElementById ("acceleration").value;
force = mass*acceleration;
document.getElementById("displayForce").value = force;

}

function displacement()
{
  var velocity,time,acceleration,displacement;
  velocity = document.getElementById("velocity").value;
  time = document.getElementById("time").value;
  acceleration = document.getElementById("acc").value;
  displacement = velocity*time-(1/2)*Math.pow(acceleration*time,2);
  document.getElementById("displayDisplacement").value = displacement;

}

function quadratic()
{
  var a,b,c,root1,root2;
  a = document.getElementById("firstSide").value;
  b = document.getElementById("secondSide").value;
  c = document.getElementById("thirdSide").value;

  root1 = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
  root2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
  document.getElementById("displayRoot1").value = root1;
  document.getElementById("displayRoot2").value = root2;

}

function presentValue()
{
  var pmt,r,n,p,result1;
  pmt = document.getElementById("PMT").value;
  r = document.getElementById("interestRate").value;
  n = document.getElementById("period").value;
  result1 = 1/Math.pow(1+r,n);
  p = pmt*(1-result1)/r;
  document.getElementById("displayPresent").value = p;

}

