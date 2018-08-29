using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;

namespace Serialport
{
    public partial class Form1 : Form
    {
        SerialPort sendport = new SerialPort();
        
       /* string recdata_ui
        {
            get
            {
                return richTextBox2.Text;
            }
            set
            {
                richTextBox2.Text = value;
            }
        }*/
        
        public Form1()
        {
            InitializeComponent();
            FillComboBoxes();
        }
        public void FillComboBoxes()
        {
            string[] ports = SerialPort.GetPortNames();
            Ports_combo.Items.AddRange(ports);
            sendport.DataReceived += new SerialDataReceivedEventHandler(DataReceivedHandler);
        }
        private static void DataReceivedHandler(object sender, SerialDataReceivedEventArgs e)
        {
            SerialPort sp = (SerialPort)sender;
            string indata = sp.ReadExisting();
            MessageBox.Show("Recieved Data:    \n  \n  \n " + indata); // Display recived Data -----
            /*Form1 f1 = new Form1();
            f1.recdata_ui = indata;*/

        }


        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                sendport.WriteLine(richTextBox1.Text);
                richTextBox1.Text = "";
            }
            catch(Exception exp)
            {
                MessageBox.Show("Can't Send Data to the port !!");
            }
           
        }

        private void button3_Click(object sender, EventArgs e)
        {
            try
            {
                if (Ports_combo.Text == "" || Bauds_combo.Text == "")
                {
                    MessageBox.Show("Can't Open Port !!! Please verify Port Settings");
                }
                else
                {

                    sendport.PortName = Ports_combo.Text;
                    sendport.BaudRate = Convert.ToInt32(Bauds_combo.Text);
                    sendport.Open();
                    button1.Enabled = true;
                    button3.Enabled = false; // Can't open the port two times ......
                    button4.Enabled = true;
                }
            }
            catch (Exception exp)
            {
                MessageBox.Show("Problem Occured in Opening Port!!");
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            try
            {
                sendport.Close();
                button1.Enabled = false;
                button3.Enabled = true;// Should open the port to send or recive data
                button4.Enabled = false;
            }
            catch(Exception exp)
            {
                MessageBox.Show("Problem Occured in Closing Port!!");
            }
        }

       
    }
}
